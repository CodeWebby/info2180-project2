window.onload = function fifteen(){
	var puzzle = [];
    var element = [];
    var row = 0, right = 0, top = 0, col = 0;

	puzzle =  $("#puzzlearea div");

	 for (var i=0;i<puzzle.length;i++){
        puzzle[i].classList.add("puzzlepiece");
       /* puzzle[i].style.backgroundPosition = "" + (col*100*-1) + "px " + (row*100*-1) + "px";
			
		puzzle[i].style.left="" + (col*100) + "px";*/
        puzzle[i].style.backgroundSize = "400px 400px";

        
    }
     for (var j = 0;j<puzzle.length;j++){
     	     
     	     puzzle[j].style.left="" + (col*100) + "px";
     	     puzzle[j].style.top="" + (row*100) + "px";
     		
     	        
     	        col++;
		        if(col>3){
			    row+=1;
			    col=0;
			    }
     	          
           }
     	
     	/*document.getElementById("shufflebutton").addEventListener('click', shufflePuzzle);*/
     	var movePiece = (piece, x,y) =>{
		piece.style.left = x + 'px';
		piece.style.top = y + 'px';
		
		piece.id = findEmpty();
	    }
       
        var findSquare = (x,y) => {
		
	}
}