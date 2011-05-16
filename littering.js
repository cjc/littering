!function($) {
  var injector = function(t,splitter,klass,after) {
      var a = $(t).text().split(splitter);
      if (a.length) {
        var inject = '';
        $(a).each(function(item,i) {
          inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
        });
        $(t).empty().append(inject);
      }
  };
  var splitters = {
    words: function(context){
      context.each(function(item){injector(item,' ','word',' ')});
    },
    chars: function(context){
      context.each(function(item){injector(item,'','char','')});
    },
    lines: function(context){
      var r = "eefec303079ad17405c889e092e105b0";
      context.each(function(item){
        $(item).children("br").after(r).remove();
        injector(item,r,'line','');
      });
    }
  };

  $.ender({
    littering: function(splitter, formatter) {
      if (!splitter) splitter = 'chars';
      splitters[splitter](this);

      return this;
    }
  },true);
}(ender);
