import {h, createProjector} from 'maquette';

const productContents = ['title', 'qty', 'button'];
const productTemplates = {
  'title': (data) => {
    return h('h2', data.name)
  },
  'qty': (data) => {
    return h('p', data.qty)
  },
  'button': (data, events) => {
    return h('button', {
      onclick: events.handleClick
    }, 'add 1')
  }
}

class Product {
  constructor() {
    this.data = {
      name: 'Hat',
      qty: 0
    }
    this.events = {
      handleClick: (evt) => {
        this.data.qty++;
      }
    }
  }

  render(projector) {
    projector.append(document.body, this.template.bind(this));
  }

  get children() {
    return productContents.map(item => {
      return productTemplates[item](this.data, this.events)
    });
  }

  template() {
    return h('div.product',
      this.children
    );
  }
}


const projector = createProjector();
let product = new Product();
product.render(projector);

