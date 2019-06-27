const stripe = require("stripe")("sk_test_DAQOPUkVHIBzAs2Yyb1vAaZW00zHmb9ZTg");

stripe.skus.create({
  product: 'prod_FHoZh7o3XVhUWt',
  attributes: {name: 'Thunderhawk', size: 'Large', gender: 'Unisex', color: 'Navy'},
  price: 4500,
  currency: 'usd',
  inventory: {type: 'infinite'}
}, function(err, sku) {
  // asynchronously called
});
