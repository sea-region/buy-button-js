import yo from 'yo-yo';

class Product {
  constructor(props) {
    this.data = {
      title: "horse mask",
      id: 1,
    }
    this.props = props;
    this.dom = this.render();
    document.body.appendChild(this.dom)
  }

  onclick(e) {
    console.log(this);
    this.props.onclick(this.data);
  }

  templates(data) {
    return {
      title: `<h2>${data.title}</h2>`,
      button: function (onclick) {
        return yo`<button onclick=${onclick.bind(this)}>Buy</button>`
      }
    }
  }

  render() {
    let defaultTemplates = this.templates(this.data);
    let templates = Object.assign({}, defaultTemplates, this.props.templates);
    return yo`<div>
      ${Object.keys(templates).map(key => {
        return templates[key](this.data, {onclick: this.onclick.bind(this)})
      })}
    </div>`
  }
}

class Cart {
  constructor(props) {
    this.data = {
      lineItems: []
    }
    this.props = props;
    this.dom = this.render();
    document.body.appendChild(this.dom)
  }

  addItem(item) {
    this.data.lineItems.push(item);
    let newDom = this.render();
    yo.update(this.dom, newDom);
  }

  render() {
    return yo`
      <div>
        <h3>Your cart</h3>
        <ul>
          ${this.data.lineItems.map(item => {
            return yo`<li>${item.title}</li>`
          })}
        </ul>
      </div>
    `
  }
}

class UI {
  constructor() {
    this.cart = new Cart();
  }

  createProduct(props) {
    let product = new Product(Object.assign({}, props, {onclick: this.addToCart.bind(this)}));
  }

  addToCart(item) {
    this.cart.addItem(item);
  }
}

const ui = new UI();

ui.createProduct({
  templates: {
    title: function (data) {
       return yo`<h1><small>Featured Product:</small> ${data.title}</h1>`
     },
    button: function (data, events) {
      return yo`<button onclick=${events.onclick}>Buy NOW</button>`
    }
  }
});
