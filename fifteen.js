window.onload = function fifteen(){
	var puzzle = [];
    var element = [];
    var row = 0,row1 = 0, right = 0, top = 0, col = 0;

	puzzle =  $("#puzzlearea div");

	 for (var i=0;i<puzzle.length;i++){
        puzzle[i].classList.add("puzzlepiece");
        puzzle[i].style.backgroundSize = "400px 400px";
        puzzle[i].style.float = "left";
       

       element[i] = [];
       element[i][0] = right;
       element[i][1] = top;

       puzzle[i].style.backgroundPosition = "-"+element[i][0]+"px -"+element[i][1]+"px";
       row1 ++;
       if (row1 === 4){top += 100; right = 0; row1 = 0; } else {right +=100;}
        
    }
     for (var j = 0;j<puzzle.length;j++){
     	     /*puzzle[j].style.backgroundPosition = "" + (col*100*-1) + "px " + (row*100*-1) + "px";*/
     	     puzzle[j].style.left="" + (col*100) + "px";
     	     puzzle[j].style.top="" + (row*100) + "px";
     	        col++;
		        if(col>3){
			    row+=1;
			    col=0;
			    }
     	          
           }

           var freemove = document.createElement("div");
             $("puzzlearea").appendTo(freemove); //add a div that acts as the free move 
                blankP(freemove);
                puzzle = $("#puzzlearea div"); // "reassign" the array puzzle with the new div added
                 document.getElementById("shufflebutton").addEventListener('click', shufflePuzzle);
            function shufflePuzzle(){
              var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
               for (var i=puzzle.length; i>0; i){
                 var j = Math.floor(Math.random() * i);
                 var x = numArray[--i];
                 var test = numArray[j];
                    if(test == "0") { 
                     puzzle[i].classList.add("puzzlepiece");
                     blankP(puzzle[i]);
                     puzzle[i].innerHTML = "";
                    }
                 else{
                 puzzle[i].innerHTML = numArray[j];
                 regularP(puzzle[i]);
                 background_Position(puzzle[i], test);
                   }
                 numArray[j] = x;
                    }
     	         }

                   
                   function blankP (bSpace){
                     bSpace.classList.remove("movablepiece");
                     bSpace.classList.add("puzzlepiece");
                     bSpace.style.float = "left";
                     bSpace.style.backgroundImage = "none";
                     bSpace.style.border = "2px solid white";
                     };


     	           var background_Position = function(piece , item){
                      piece.style.backgroundPosition = "-"+element[item-1][0]+"px -"+element[item-1][1]+"px";
                       };
		          
		          var regularP = function(p){
                   p.classList.add("puzzlepiece");
                   p.style.border = "2px solid black";
                   p.style.backgroundImage = "url(background.jpg)";
                   p.style.backgroundSize = "400px 400px";
                   };

	
  }