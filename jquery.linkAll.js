(function($){
  $.fn.linkAll = function(options){
    var settings = $.extend({
      href :null,
      text :null,
      target :'_self'
    },options);

    if(settings.href == null){
      console.log("You need to enter a href for linkAll to work");
      return this;
    }


    return this.each(function(){
      var object = $(this);

      if(settings.text == null){
        settings.text = object.text();
      }

      object.wrap('<a href="'+settings.href+'" target = "'+settings.target+'"></a>').text(settings.text);
    });

  }
}(jQuery));
