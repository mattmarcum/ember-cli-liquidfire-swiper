import Ember from 'ember';
import RouteSwiper from 'dummy/mixins/route-swiper';

export default Ember.Route.extend(RouteSwiper, {
  nextSlide: 'slide-2',
  previousSlide: 'index'
});
