import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    transitionRight(){
      this.transitionTo(this.get('nextSlide'));
    },
    transitionLeft(){
      this.transitionTo(this.get('previousSlide'));
    }
  }
});
