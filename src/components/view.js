import Handlebars from 'handlebars';

let idCounter = 0;

function uniqueId() {
  return `shopify-ui-${++idCounter}`;
}

export default class View {
  constructor(data, options) {
    ({templates: this.templates, contents: this.contents} = options);
    this.id = uniqueId();
  }

  get templateString() {
    return this.contents.reduce((acc, item) => {
      return acc + this.templates[item];
    });
  }

  get template() {
    return Handlebars.compile(this.templateString);
  }

  html(data) {
    return `<div>${this.template(data)}</div>`;
  }
}
