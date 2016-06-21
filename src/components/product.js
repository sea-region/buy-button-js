import merge from 'deepmerge';
import productDefaults from '../defaults/product';
import Component from './component';

export default class Product extends Component {
  constructor(config, data = {}) {
    super(config, data, productDefaults);
  }

  get events() {
    return {
      'click .button': this.addToCart.bind(this)
    }
  }

  addToCart() {
    this.callbacks.addToCart(this.data);
  }

  fetch() {
    return this.client.fetchProduct(this.id).then(product => {
      return product;
    });
  }
}
