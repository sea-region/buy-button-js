import "babel-polyfill";
import Product from './components/product';
import Cart from './components/cart';
import ShopifyBuy from 'shopify-buy';

window.ShopifyBuy = ShopifyBuy;

const componentTypes = {
  product: Product
}

class UI {
  constructor() {
    this.client = ShopifyBuy.buildClient({
      apiKey: 'bf081e860bc9dc1ce0654fdfbc20892d',
      myShopifyDomain: 'embeds',
      appId: '6'
    });
    this.components = [];
    this.cart = new Cart({client: this.client});
    this.cart.init();
  }

  addToCart(product) {
    this.cart.addItem(product);
  }

  createComponent(type, config) {
    this.components.push(new componentTypes[type](Object.assign({}, config, {
        client: this.client,
        callbacks: {
          addToCart: this.addToCart.bind(this)
        }
      })
    ).init())
  }
}

ShopifyBuy.UI = new UI();

ShopifyBuy.UI.createComponent('product', {
  id: 6640321030,
  styles: {
    button: {
      'background-color': 'red',
      'color': 'black'
    }
  }
});

