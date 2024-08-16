let grid = document.querySelector("#sketchArea")
      // function to create initial grid
function makeGrid(squares){

    for(let i = 1; i <= squares; i++)  {
    let row = document.createElement("div");
    row.classList.add ("row");
    grid.appendChild(row);

     for(let j = 1; j <= squares; j++){
    let column = document.createElement("div")
    column.classList.add("column");
    row.appendChild(column);

         // add color when the mouse hovers
         column.addEventListener("mouseover", () => {
            column.style.backgroundColor= "purple";
    
        })
     
     }
  }

}

                 //function for choosing grid number/squares
   let chooseGrid = document.querySelector("#gridSize")

     chooseGrid.addEventListener("click", () => {
        let squares = parseInt(prompt("how many squares do you want?\n (chose between 1 and 60)"))

        if(squares == null || squares <= 0 || squares > 60 || isNaN(squares)){
                 alert("please type a number between 1 & 60");
                 

        } else{
            grid.innerHTML = "";
             makeGrid(squares)
        }
    
     })
                   //function to clear the grid

                let clearGrid = document.querySelector("#clear");
                clearGrid.addEventListener("click", () => {
                    window.location.reload();
                })

          //function for rainbow colors *not done yet

          let rainbowColors = document.querySelector("#rainbowColors")

     

