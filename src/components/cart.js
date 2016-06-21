import merge from 'deepmerge';
import View from './view';
import cartDefaults from '../defaults/cart';
import Component from './component';

export default class Cart extends Component {
  constructor(config = {}, data = {}) {
    super(config, data, cartDefaults);
  }

  render() {
    super.render(this.children());
  }

  addItem(product) {
    this.data.addVariants({variant: product.selectedVariant, quantity: 1}).then((cart) => {
      this.data = cart;
      this.render();
    });
  }

  children() {
    return this.data.lineItems.reduce((acc,item) => {
      let view = new View(item, {
        templates: this.options.lineItem.templates,
        contents: this.options.lineItem.options.contents
      });
      return acc + view.html({data: item})
    }, '');
  }

  fetch() {
    if (localStorage.getItem('lastCartId')) {
      return this.client.fetchCart(localStorage.getItem('lastCartId')).then(function(remoteCart) {
        return remoteCart;
      });
    } else {
      return this.client.createCart().then(function (newCart) {
        localStorage.setItem('lastCartId', newCart.id);
        return newCart;
      });
    }
  }
}
