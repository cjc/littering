#Littering - a less elegant javascript span injector

Littering is an [ender](https://github.com/ender-js/ender) based variation of [Lettering.js](https://github.com/davatron5000/Lettering.js). Where lettering.js injects positional classes for styling chars/words/lins, Littering accepts functions to determine which classes to apply to which elements.

##Lettering.js compliance

Littering mimics the same api as Lettering.js for the base functionality of decorating chars/words/lines with their position.

```javascript
$("#demo1 h1").littering();
$("#demo2 h1").littering('words');
$("#demo3 p").littering('lines');
$("#demo4 h1").littering('words').children("span").littering();
$("#demo5 h1").littering().children("span").css({'display':'inline-block', '-webkit-transform':'rotate(-25deg)'});
```

##Other uses

Not in 0.0.1

##History

0.0.1 - Replicate Lettering.js functionality running on ender.

##Credits

Inspiration and some (ok, a bunch of) code (examples/index.html, the injector func) pinched from the excellent [Lettering.js](https://github.com/davatron5000/Lettering.js).

##License

Released under the [WTFPL](http://sam.zoy.org/wtfpl/) license
