import cartTemplate from '../templates/cart';
import lineItemTemplate from '../templates/line-item';

const cartDefaults = {
  options: {
    className: 'cart',
    iframe: true,
    entryNode: document.getElementsByTagName('script')[0].parentNode,
    contents: ['title', 'items', 'total', 'checkout'],
    lineItem: {
      templates: lineItemTemplate,
      options: {
        className: 'cart-item',
        contents: ['img', 'title', 'price', 'updateQuantity', 'quantity']
      }
    }
  },
  templates: cartTemplate,
  classes: {
    data: 'cart_content'
  },
  callbacks: {},
  styles: {}
}

export default cartDefaults;
