const productTemplate = {
  img: '<img width="300" class="{{data.classes.productImg}}" src="{{data.currentImage.src}}" />',
  title: '<h1 class="{{data.classes.title}}">{{data.title}}</h1>',
  variantTitle: '{{#data.hasVariants}}<h2 class="{{data.classes.variantTitle}}">{{data.selectedVariant.title}}</h2>{{/data.hasVariants}}',
  options: '{{#data.hasVariants}}<div class="{{data.classes.options}}">{{{data.optionsHtml}}}</div>{{/data.hasVariants}}',
  price: `<div class="{{data.classes.prices}}">
            {{#data.selectedVariant.compareAtPrice}}<span class="{{data.classes.compareAt}}">\${{data.selectedVariant.compareAtPrice}}</span>{{/data.selectedVariant.compareAtPrice}}
            <span class="{{data.classes.price}} {{data.priceClass}}">\${{data.selectedVariant.price}}</span>
          </div>`,
  description: '<div class="{{data.classes.description}}">{{{data.description}}}</div>',
  button: '<button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.button}} {{data.buttonClass}}">{{data.buttonText}}</button>',
  quantity: `<div class="cart-item__quantity-container">
              <button class="{{data.classes.quantityButton}} quantity-decrement" type="buttoni" ><span>-</span><span class="visuallyhidden">Decrement</span></button>
              <input class="{{data.classes.quantityInput}}" type="number" min="0" aria-label="Quantity" value="{{data.selectedQuantity}}">
              <button class="{{data.classes.quantityButton}} quantity-increment" type="button"><span>+</span><span class="visuallyhidden">Increment</span></button>
            </div>`,
  option: `<div class={{data.classes.option}}>
    <label class="{{data.classes.label}}">{{data.name}}</label>
      <div class="{{data.classes.selectWrapper}}">
      <select class="{{data.classes.select}}" name="{{data.name}}">
        {{#data.values}}
          <option {{#disabled}}disabled{{/disabled}} {{#selected}}selected{{/selected}} value={{name}}>{{name}}</option>
        {{/data.values}}
      </select>
      <svg class="shopify-select-icon" viewBox="0 0 24 24"><path d="M21 5.176l-9.086 9.353L3 5.176.686 7.647 12 19.382 23.314 7.647 21 5.176z"></path></svg>
    </div>
  </div>`,
};

export default productTemplate;
