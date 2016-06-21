import merge from 'deepmerge';
import View from './view';
import morphdom from 'morphdom';

export default class Component {
  constructor(config, data, defaults) {
    ({
      options: this.options,
      templates: this.templates,
      styles: this.styles,
      callbacks: this.callbacks
    } = merge(defaults, config));
    this.id = config.id;
    this.client = config.client;
    this.data = data;
    this.el = document.createElement('div');
    this.options.entryNode.appendChild(this.el);
    this.view = new View(this.data, {
      templates: this.templates,
      contents: this.options.contents
    });
  }

  events() {
    return {}
  }

  delegateEvents() {
    Object.keys(this.events).forEach(key => {
      let [eventType, selector] = key.split(' ');
      let nodes = this.el.querySelectorAll(selector);
      [...nodes].forEach(node => {
        node.addEventListener(eventType, (evt) => {
          this.events[key].call(this, this, evt);
        });
      });
    });
  }

  init() {
    this.fetch().then(data => {
      this.data = data;
      this.render();
      this.delegateEvents();
    });
  }

  render(children) {
    const viewData = this.data;
    viewData.children_html = children;
    let html = this.view.html({data: viewData});
    if (this.el.innerHTML.length) {
      let div = document.createElement('div');
      div.innerHTML = html;
      morphdom(this.el, div);
    } else {
      this.el.innerHTML = html;
    }
  }
}
