import productTemplate from '../templates/product';
import optionTemplate from '../templates/option';

const productDefaults = {
  options: {
    className: 'product',
    iframe: true,
    modal: false,
    entryNode: document.getElementsByTagName('script')[0].parentNode,
    contents: ['img', 'title', 'variantTitle', 'price', 'variantSelection', 'button'],
    classes: {
      title: 'product-title',
      variantTitle: 'variant-title',
      price: 'variant-price',
      button: 'buy-button',
      data: 'product'
    },
  },
  templates: productTemplate,
  events: {},
  styles: {}
}

export default productDefaults;
