$(document).ready(function(){
  var move=0;
$("table tr td").click(function(){
  
        if(move==0){
            $(this).css('background-color','#76806F');
            $(this).css('pointer-events','none');
            move=1
        }else if(move==1){
          $(this).css('background-color','#A88342');
          $(this).css('pointer-events','none');
          move=0
        }
        
        
})
})

