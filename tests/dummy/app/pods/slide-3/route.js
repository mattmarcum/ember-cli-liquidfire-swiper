import Ember from 'ember';
import RouteSwiper from 'dummy/mixins/route-swiper';

export default Ember.Route.extend(RouteSwiper, {
  nextSlide: 'index',
  previousSlide: 'slide-2'
});
