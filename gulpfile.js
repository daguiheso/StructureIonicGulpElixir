var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir(function(mix) {
    elixir.extend('sourcemaps', false);
    mix.less("style.less", "./WWW/css");

    mix.scripts([
      "app.js"
    ], "./WWW/js", "resources/assets/js");

});