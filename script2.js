
let color = "black";
let board = document.querySelector('.board');
let setGrid = document.querySelector('#setGrid');
let clear = document.querySelector('#clear');



function removeBoardNodes(parent){
        while (parent.firstChild){
                parent.removeChild(parent.firstChild);
        }
}


for(let i = 0; i < 256; i++){  

        const square = document.createElement('div');
        
        square.classList.add('square');
        square.style.width = '31.25px';
        square.style.height= '31.25px';

        board.appendChild(square);

        square.addEventListener('mouseover',colourSquare);

        clear.addEventListener('click',function(){
                square.style.backgroundColor = 'white';
        });


}


setGrid.addEventListener('click',function(){

        removeBoardNodes(board);
        let grid = prompt("How many Squares per side do you want");
        let gridNum = parseInt(grid);
        if(gridNum <= 64){
                for(let i = 0; i < (gridNum * gridNum); i++){  

                        const square = document.createElement('div');
                        

                       
                        const boardWidth = 500;
                        const boardHeight = 500;

                        
                        square.classList.add('square');
                        square.style.width = `calc(${boardWidth}px / ${gridNum})`;
                        square.style.height= `calc(${boardHeight}px / ${gridNum})`;

                        board.appendChild(square);
                        
                        square.addEventListener('mouseover',colourSquare);

                        clear.addEventListener('click',function(){
                                square.style.backgroundColor = 'white';
                        });
                


                        

                       
                                              
                        
                           
                }
        

        }
        

        else if(grid < 0){
                alert("Enter proper amount");
        }

        else{
                alert("Number too high, try again");
        }
        
        

});


function changeColour(choice){
        color = choice;
}

function colourSquare(){
        if(color === "random"){

                let randomR = Math.floor(Math.random() * 256);
                let randomG = Math.floor(Math.random() * 256);
                let randomB = Math.floor(Math.random() * 256);
        
                this.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
        }

        else{
                this.style.backgroundColor = `${color}`;
        }
};











    

