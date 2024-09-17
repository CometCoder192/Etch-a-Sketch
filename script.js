/*
button activates alert which asks user how many boxes are wanted. Onto div creation
each side has the number of boxes user answered. e.g. if 3, then the grid will be 3x3. if 4, it will be 4x4
so, the rowNum = colNum no matter what to the upper limit of 64, and lower limit of 1.

problem --> how to generate divs, and arrange them after generating?
possible solution --> if 3 divs are to demanded, then create the divs, style them, append them in the js itself, then repeat the same for column.
As everything needs to be in flexbox, we will handle each row seperately. e.g. first row will get first 3 boxes, and so on.
so colNum is redundant basically. 

once i figure out how to generate the divs i want, i can move on to the event listeners and all that trivial stuff.
+ there needs to be a 'clear' button which clears the grid canvas so as to say.

1. plan to generate divs(rows) - for loop, i < squareNum as this creates as many divs as the rows need


*/

let generator = document.querySelector("#generator");

generator.addEventListener ('click', () => {
    let squareNum = Number(prompt("How many squares on each side? [1-64]").toLowerCase());
    // task --> validate prompt to only accept nums 1 to 64;
    if (isNaN(squareNum) || squareNum > 64 || squareNum < 1) {
        alert ("Please enter a number between 1 to 64");
    } else {
        console.log(squareNum);
        let container = document.querySelector('.container');
        container.innerHTML = '' // ensures that container is initially empty;
        
        function colorSetter () {
            let color = "#";
            let letters = "0123456789ABCDEF"
            for (let i = 0; i < 6; i++) {
                color+= letters[Math.floor(Math.random()*16)];
            }
            return color;
        }
        for (let i = 0; i < squareNum; i++) {
            let row = document.createElement('div');
            row.classList.add('row');

            for (let j = 0; j < squareNum; j++) {
                let elem = document.createElement('div');
                elem.classList.add('elem');

                row.appendChild(elem);

                
                elem.addEventListener ('mousemove', () => {                    
                    elem.style.background = colorSetter();
                })
            }


            container.appendChild(row);
        }
    }

})

