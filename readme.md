#Littering - a less elegant javascript span injector

Littering is an [ender](https://github.com/ender-js/ender) based variation of [Lettering.js](https://github.com/davatron5000/Lettering.js). Where lettering.js injects positional classes for styling chars/words/lins, Littering accepts functions to determine which classes to apply to which elements.

##See it

Check the examples at [http://cjc.github.com/littering]()

##Use it

Get littering by including it in your ender build

```
ender add littering
```

###Lettering.js compliant behaviour

Littering mimics the same api as Lettering.js for the base functionality of decorating chars/words/lines with their position.

```javascript
$("#demo1 h1").littering();
$("#demo2 h1").littering('words');
$("#demo3 p").littering('lines');
$("#demo4 h1").littering('words').children("span").littering();
$("#demo5 h1").littering().children("span").css({'display':'inline-block', '-webkit-transform':'rotate(-25deg)'});
```

###Other functionality

In addition to simply numbering elements, littering accepts custom formatter functions to allow arbitrary substitution of elements and complex class setting.  

```javascript
$("#demo6 h1").littering('chars',function(){return 'a'});`
$("#demo7 h1").littering('chars',function(item,i){
  var str = item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91 ? " upper" : "" ;
  return '<span class="char'+(i+1)+str+'">'+item+'</span>';
});
```

##History

0.0.2 - Enable and add examples for passed formatter functions.
0.0.1 - Replicate Lettering.js functionality running on ender.

##Credits

Inspiration and some (ok, a bunch of) code (examples/index.html, the injector func) pinched from the excellent [Lettering.js](https://github.com/davatron5000/Lettering.js).

##License

Released under the [WTFPL](http://sam.zoy.org/wtfpl/) license
