const cartTemplates = {
  title: `<div class="{{data.classes.header}}">
            <h2 class="{{data.classes.title}}">{{data.text.title}}</h2>
            <button class="{{data.classes.close}}">
              <span aria-role="hidden">×</span>
              <span class="visuallyhidden">Close</span>
             </button>
          </div>`,
  lineItems: '<div class="{{data.classes.cartScroll}}"><div class="{{data.cart.lineItems}}">{{{data.lineItemsHtml}}}</div></div>',
  footer: `<div class="{{data.classes.footer}}">
            <p class="{{data.classes.subtotalText}}">{{data.text.total}}</p>
            <p class="{{data.classes.subtotal}}"><span class="{{data.classes.currency}}"></span>\${{data.subtotal}}</p>
            <p class="{{data.classes.notice}}">{{data.text.notice}}</p>
            <button class="{{data.classes.button}}" type="button">{{data.text.button}}</button>
          </div>`,
  image: '<img class="{{data.classes.image}}" src="{{data.image.src}}" />',
  variantTitle: '<div class="{{data.classes.variantTitle}}">{{data.variant_title}}</div>',

  productTitle: '<span class="{{data.classes.itemTitle}}">{{data.title}}</span>',
  price: '<span class="{{data.classes.price}}">${{data.line_price}}</span>',
  quantity: `<div class="cart-item__quantity-container">
              <button class="{{data.classes.quantityButton}} quantity-decrement" type="button" data-line-item-id="{{data.id}}"><span>-</span><span class="visuallyhidden">Decrement</span></button>
              <input class="{{data.classes.quantityInput}}" type="number" min="0" aria-label="Quantity" data-line-item-id="{{data.id}}" value="{{data.quantity}}">
              <button class="{{data.classes.quantityButton}} quantity-increment" type="button" data-line-item-id="{{data.id}}"><span>+</span><span class="visuallyhidden">Increment</span></button>
            </div>`,
};

export default cartTemplates;
