module.exports = function(sequencer){
  let iterator = 0;

  return {
    next: function(){
      let holder;
      for (let i = 0; i <= iterator; i++){
        holder = sequencer()();
      }
      return sequencer()()
    }
  }
}
