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
  $.ender({
    littering: function(type) {
      if (type === 'words') {
        this.each(function(item){injector(item,' ','word',' ')});
      } else if (type === 'lines') {
        var r = "eefec303079ad17405c889e092e105b0";
        this.each(function(item){
          $(item).children("br").after(r).remove();
          injector(item,r,'line','');
        });
      } else {
        this.each(function(item){injector(item,'','char','')});
      }
      return this;
    }
  },true);
}(ender);
