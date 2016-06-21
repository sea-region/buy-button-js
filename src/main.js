import {h, createProjector} from 'maquette';
import merge from 'deepmerge';

class Component {
  constructor(config, defaults) {
    const mergedConfig = merge(defaults, config);
    ({templates: this.templates, events: this.events, options: this.options} = mergedConfig);
  }

  render() {
    projector.append(this.options.node, this.template.bind(this));
  }

  get children() {
    return this.options.contents.map(item => {
      return this.templates[item](this.data, this.events);
    });
  }

  template() {
    return h('div.' + this.options.className, this.children);
  }
}

const projector = createProjector();

const productDefaults = {
  options: {
    dest: 'cart',
    contents: ['title', 'button'],
    className: 'product'
  },
  templates: {
    'title': (data) => {
      return h('h2', data.name)
    },
    'button': (data, events) => {
      return h('button', {
        onclick: events.handleClick
      }, 'add to cart')
    }
  },
  events: {}
}

class Product extends Component {
  constructor(config) {
    super(config, productDefaults);
    this.data = {
      id: 1,
      title: 'hat'
    }
    this.events.handleClick = (evt) => {
      this.events.addToCart(this.data);
    }
    this.render();
  }
}

const cartDefaults = {
  templates: {
    title: () => {
      return h('h3', 'Your Cart')
    },
    items: (data) => {
      return data.lineItems.map(item => {
        return h('h5#' + item.id, item.title)
      });
    }
  },
  options: {
    className: 'cart',
    contents: ['title', 'items'],
    node: document.body
  }
}

class Cart extends Component {
  constructor(config = {}) {
    super(config, cartDefaults);
    this.data = {
      lineItems: []
    }
    this.render();
  }

  addItem(product) {
    this.data.lineItems.push(product);
  }
}

class UI {
  constructor() {
    this.products = [];
    this.cart = new Cart();
  }

  createProduct(config) {
    const events = {
      addToCart: this.addToCart.bind(this)
    }
    const productConfig = Object.assign({}, config, {events: events});
    this.products.push(new Product(productConfig));
  }

  addToCart(variant) {
    this.cart.addItem(variant);
  }
}

const ui = new UI();

ui.createProduct({
  templates: {
    title: (data) => {
      return h('h3',
              h('small', 'featured'),
              data.title)
    }
  },
  options: {
    node: document.body
  }
})
