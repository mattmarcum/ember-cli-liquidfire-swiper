module.exports = {

  name: 'ember-cli-liquid-fire-swipe',

  description: 'Adds ember-liquidfire and ember-mobiletouch addons',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    var addons = [
      'ember-liquidfire',
      'ember-mobiletouch'
    ];

    addons.forEach(function(addon){ this.addAddonToProject(addon); }.bind(this));
  }
};
