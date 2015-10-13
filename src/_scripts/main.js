// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');
window.$ = window.jQuery = $;
require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition')
require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse')

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});
