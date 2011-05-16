!function($) {
  var injector = function(t,splitter,klass,after) {
      var a = $(t).text().split('');
      if (a.length) {
        var inject = '';
        $(a).each(function(item,i) {
          inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
        });
        $(t).empty().append(inject);
      }
  };
  $.ender({
    littering: function() {
      this.each(function(item){injector(item,'','char','')});
      return this;
    }
  },true);
}(ender);
