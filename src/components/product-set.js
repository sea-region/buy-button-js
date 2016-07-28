import Component from '../component';
import Product from './product';

export default class ProductSet extends Component {
  get typeKey() {
    return 'productSet';
  }

  get styles() {
    return Object.assign({}, this.options.styles, this.config.product.styles);
  }

  get classes() {
    return Object.assign({}, this.options.classes, this.config.product.classes);
  }

  fetchData() {

    // eslint-disable-next-line camelcase
    return this.props.client.fetchQueryProducts({product_ids: this.id}).then((products) => {
      return {
        products,
      };
    });
  }

  render() {
    super.render();
    const productConfig = Object.assign({}, this.config, {
      node: this.document.querySelector(`.${this.classes.wrapper}`),
    });
    productConfig.product.iframe = false;

    const promises = this.model.products.map((productModel) => {
      return new Product(productConfig, this.props).init(productModel);
    });

    return Promise.all(promises).then(() => this.resizeAfterImgLoad());
  }
}
