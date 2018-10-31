window.onload = function fifteen(){
	var y = 100;
	var x = 100;

	var element = document.getElementById("puzzlearea").querySelectorAll("div");
       for (var i = 0; i < 15; i++){
	     element[i].classList.add("puzzlepiece");
         }
         
        function ChangeBgPos () {
            var selects = document.getElementsByClassName ("puzzlepiece");

            
            var selectStates = [];
            for (var i=0; i < selects.length; i++) {
                var whichSelected = selects[i].selectedIndex;
                selectStates.push (selects[i].options[whichSelected].text);
            }

            var div = document.getElementByClassName ("puzzlepiece");

            if ('backgroundPositionX' in div.style) {
                div.style.backgroundPositionX = selectStates[0];
                div.style.backgroundPositionY = selectStates[1];
            } else {
                div.style.backgroundPosition = (selectStates[0] + " " + selectStates[1]);
            }
        }
     
}