import Ember from "ember";

export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-1'),
    this.use('slide-left'),
    this.reverse('slide-right')
  );
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-2'),
    this.use('slide-left'),
    this.reverse('slide-right')
  );
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-3'),
    this.use('slide-left'),
    this.reverse('slide-right')
  );
  this.transition(
    this.fromRoute('slide-3'),
    this.toRoute('index'),
    this.use('slide-left'),
    this.reverse('slide-right')
  );
};
