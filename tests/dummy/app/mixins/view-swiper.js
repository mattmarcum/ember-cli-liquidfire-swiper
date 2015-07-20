import Ember from 'ember';

var processGesture = function(e){
  const RIGHT = 4, LEFT = 2;
  let direction = e.originalEvent.gesture.direction;

  if( direction === LEFT ){
    if(e.type==='panstart' || e.type==='swipe'){
      this.get('controller').send('transitionRight');
    }else if(e.type==='pan'){
      this.trigger('panRight', e);
    }
  }else if( direction === RIGHT ){
    if(e.type==='panstart' || e.type==='swipe'){
      this.get('controller').send('transitionLeft');
    }else if(e.type==='pan'){
      this.trigger('panLeft', e);
    }
  }
}

export default Ember.Mixin.create(Ember.Evented, {
  classNames: ['slide'],

  //pan: processGesture,

  panstart: processGesture

  //swipe: processGesture

});
