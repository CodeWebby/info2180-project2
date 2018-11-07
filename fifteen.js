/* End Game notification
Animation*/


window.onload = function fifteen(){
	var puzzle = document.querySelectorAll("div#puzzlearea div");
    var row = 0,row1 = 0, right = 0, top = 0, col = 0;
    var bx = "300px";
	var by = "300px";

	var solvedleft = new Array();
	var solvedtop = new Array();

	

	 for (var i=0;i<puzzle.length;i++){
        puzzle[i].classList.add("puzzlepiece");
        puzzle[i].style.backgroundSize = "400px 400px";
        puzzle[i].style.backgroundPosition = "" + (col*100*-1) + "px " + (row*100*-1) + "px";

             puzzle[i].style.left="" + (col*100) + "px";
     	     solvedleft.push(puzzle[i].style.left);
     	     puzzle[i].style.top="" + (row*100) + "px";
     	     solvedtop.push(puzzle[i].style.top);
     	        col++;
		        if(col>3){
			    row+=1;
			    col=0;
			    }
     	         (function(){
			      var pos = i;
			     //add on click event listener for moving a block
			     puzzle[i].addEventListener("click",function(){move(pos);},false);
			     //add on mouse over event listener for movable blocks
			     puzzle[i].addEventListener("mouseover",function(){isMovable(pos);},false);
		         }());
        
    }
   



          function isMovable(pos){
		if(puzzle[pos].style.left == bx || puzzle[pos].style.top == by){//check if block is in same row or column as blank space in the grid
			//check if the current block is near to the blank space
			if(Math.abs(bx.substring(0,bx.length-2) - (puzzle[pos].style.left.substring(0,puzzle[pos].style.left.length-2)))==100 ||
		   	   Math.abs(by.substring(0,by.length-2) - (puzzle[pos].style.top.substring(0,puzzle[pos].style.top.length-2)))==100)
			{
				puzzle[pos].classList.add('movablepiece');//assign class to blocks with a valid move
				return true;
			}
		  }
	   }

	   function move(position){
		//swap the blank space position with current block position
		if(isMovable(position)){
			var tempx = bx;
			var tempy = by;
			bx = puzzle[position].style.left;
			by = puzzle[position].style.top;
			puzzle[position].style.left = tempx;
			puzzle[position].style.top = tempy;
			$("puzzle[position]").fadeOut(400,"swing",function() {$("puzzle[position]").fadeIn(400,"swing");
			
			});
			for(var i=0;i<puzzle.length;i++){
				puzzle[i].classList.remove('movablepiece');
			}
		}
		//check if the puzzle has been solved
		if(isSolved()){
			for(i=0;i<puzzle.length;i++)
			{
				puzzle[i].style.backgroundImage = "url('background.jpg')";
				puzzle[i].style.backgroundSize = "400px 400px";//let image size and grid size be the same
				puzzle[i].style.borderColor = "#a6ff4d";
			}
			document.body.innerHTML =  "<h1>Congrats for using your brain!</h1>";//display  message
			document.body.style.fontSize = "18pt";
			document.body.style.color = "#a6ff4d" ;
			document.body.style.fontFamily = "Times New Roman";
		}
	     }
			
		
	
            
                 document.getElementById("shufflebutton").addEventListener('click', function(){shufflePuzzle();},false);
                 var options = new Array();
	              var opt=0;

	              function shufflePuzzle(){
	            	for(var a=0;a<1000;a++){
			          for(var i=0;i<puzzle.length;i++){
				          if(isMovable(i)){
					         options.push(i);	
				           }
			             }
			         opt=options[Math.floor((Math.random()*options.length)+0)];
			         move(opt);
		              }
		                for(i=0;i<puzzle.length;i++)
			{
				puzzle[i].style.backgroundImage = "url('background.jpg')";
				puzzle[i].style.backgroundSize = "400px 400px";
				puzzle[i].style.borderColor = "black";
			}
			document.body.innerHTML =  "<h1>Fifteen Puzzles!</h1>";
			document.body.style.fontSize = "18pt";
			document.body.style.color = "black" ;
			document.body.style.fontFamily = "Times New Roman";
		}
		 		           
	
                 function isSolved(){
		          for(var i=0;i<puzzle.length;i++){
			       if(puzzle[i].style.left!= solvedleft[i] || puzzle[i].style.top!=solvedtop[i]){
				     return false;
			         }
		            }
		           return true;
	                }

                   
	
  }