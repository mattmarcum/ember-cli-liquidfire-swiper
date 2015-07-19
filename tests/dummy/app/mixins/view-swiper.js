import Ember from 'ember';

var processGesture = function(e){
  const RIGHT = 4, LEFT = 2;
  let direction = e.originalEvent.gesture.direction;

  if( direction === LEFT ){
    //if(e.originalEvent.gesture.isFirst){
      this.get('controller').send('transitionRight');
    //}
    //if(e.type==='pan'){ this.trigger('panRight'); }
  }else if( direction === RIGHT ){
    //if(e.originalEvent.gesture.isFirst){
      this.get('controller').send('transitionLeft');
    //}
    //if(e.type==='pan'){ this.trigger('panLeft'); }
  }
};

export default Ember.Mixin.create(Ember.Evented, {
  classNames: ['slide'],

  //pan: processGesture,

  swipe: processGesture

});
