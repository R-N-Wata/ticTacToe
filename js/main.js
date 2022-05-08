
//have an arr of cells used up.

//computer choice is random


let cells = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']

let buttons =  [...document.querySelectorAll('button')]

const keys = document.querySelectorAll('button').forEach((btn, i)=> {
    btn.addEventListener('click', function (){

     
        
           

        
        ticTacToe.winner(btn, i)
    })
})






const ticTacToe = {
    player: 'X',

    computer: 'O',

    winner(btn, i){


        
     
        ticTacToe.computerChoice(btn)
        ticTacToe.showPlayerChoice(btn)

        buttons = buttons.filter(b => cells.includes(b.value) )
        buttons.forEach(b => console.log(b.value))

    },

    computerChoice(btn){

        let len = cells.length -2
        let random = Math.round(Math.random() * len)
console.log(random )
        while(cells[random] === btn.value){
            
            random = Math.round(Math.random() * len)
            
        }
             this.showComputer(random)
             cells.splice(random,1)
         
        
       
         
        
    },
    showPlayerChoice(btn){
     
        btn.innerText = this.player

        cells.splice(cells.indexOf(btn.value), 1)

    },

    showComputer(cell){

        buttons.forEach((b, i) => {
            if( i === cell){
                b.innerText = this.computer
                
            }
        
        })       

    }

}
