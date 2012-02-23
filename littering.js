!function($) {
  var injector = function(formatter,t,splitter) {
      var a = $(t).text().split(splitter);
      if (a.length) {
        var inject = '';
        $(a).each(function(item,i) {
          inject += formatter(item, i, a);
        });
        $(t).empty().html(inject);
      }
  };
  var formatters = {
    numbered : function(klass, after) {
      return function(item, i) {
        return '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
      };
    }
  };
  var splitters = {
    words: function(context, formatter){
      context.each(function(item){injector(formatter, item,' ');});
    },
    chars: function(context, formatter){
      context.each(function(item){injector(formatter, item,'');});
    },
    lines: function(context, formatter){
      var r = "eefec303079ad17405c889e092e105b0";
      context.each(function(item){
        $(item).children("br").after(r).remove();
        injector(formatter, item,r);
      });
    }
  };
  splitters.words.formatter = formatters.numbered('word',' ');
  splitters.chars.formatter = formatters.numbered('char','');
  splitters.lines.formatter = formatters.numbered('line','');

  $.ender({
    littering: function(splitter, formatter) {
      if (!splitter) {splitter = 'chars';}
      if (typeof(splitter) !== 'function') {
        splitter = splitters[splitter];
      }
      if (typeof(formatter) === 'function') {
        splitter(this, formatter);
      } else {
        splitter(this, splitter.formatter);
      }
      return this;
    }
  },true);
}(ender);
