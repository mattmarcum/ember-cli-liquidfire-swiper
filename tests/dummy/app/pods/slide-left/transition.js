import { animate, stop } from "liquid-fire";
import MoveOver from "dummy/transitions/move-over";

export default function (opts) {


  this.oldView.on('panLeft', function(){
    console.log('panning left');
  });

  this.oldView.on('panRight', function(){
    console.log('panning left');
  });

  return MoveOver.call(this, 'x', -1, opts);

}
