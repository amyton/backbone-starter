(function () {

  window.InventoryView = Backbone.View.extend({
    events: {
      'click .add-shirts': 'addShirts'
    },

    addShirts: function (e) {
      var type = $(e.currentTarget).data('type');
      console.log('Adding one of every', type, 'shirt for', this.options.shirts);
      var shirts =  this.options.shirts;
      for(var i=0; i < shirts.length; i += 1) 
        {
          if (type === 'small')
            {
              var smallShirts = shirts[i].get('small');
              shirts[i].set({ small: smallShirts + 1});
              // console.log('New val', shirts[i].get('small'));
            }
          else if (type === 'medium') 
            {
              var mediumShirts = shirts[i].get('medium');
              shirts[i].set({ medium: mediumShirts + 1});
            }
          else if (type === 'large')
            {
              var largeShirts = shirts[i].get('large');
              shirts[i].set({ large: largeShirts + 1});
            }
        }
      // TODO: Write a for loop to iterate through this.options.shirts and
      // add +1 to each of that shirt's `type` inventory.
      // For example, if type === 'small', then add +1 to every small stock
      // in each shirt in this.options.shirts. Use .set(???) for this.
    }
  });

})();
