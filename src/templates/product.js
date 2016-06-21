const productTemplate = {
  title: '<h1 class="{{classes.title}}">{{data.title}}</h1>',
  img: '<img src="{{data.selectedVariantImage.src}}" />',
  variantTitle: '<h2 class="{{classes.variantTitle}}">{{data.selectedVariant.title}}</h2>',
  price: '<h2 class="{{classes.price}}">{{data.selectedVariant.price}}</h2>',
  variantSelection: '<div data-include></div>',
  button: '<button data-event="click.addVariantToCart" class="{{classes.button}} button">Add To Cart</button>',
}

export default productTemplate;
