
//have an arr of cells used up.

//computer choice is random


let cells = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']

const box0 =document.querySelector('.box0')

const box1 =document.querySelector('.box1')

const box2 =document.querySelector('.box2')

const box3 =document.querySelector('.box3')

const box4 =document.querySelector('.box4')

const box5 =document.querySelector('.box5')

const box6 =document.querySelector('.box6')

const box7 =document.querySelector('.box7')

const box8 =document.querySelector('.box8')

const h2 = document.querySelector('h2')

const winner = document.querySelector('.winner')

let buttons =  [...document.querySelectorAll('button')]

let possibleWins = [
    ['c0', 'c1', 'c2'],
    ['c3', 'c4', 'c5'],
    ['c6', 'c7', 'c8'],
    ['c0', 'c3', 'c6'],
    ['c1', 'c4', 'c7'],
    ['c2', 'c5', 'c8'],
    ['c0', 'c4', 'c8'],
    ['c2', 'c4', 'c6'],
]

const keys = document.querySelectorAll('button').forEach((btn, i)=> {
    btn.addEventListener('click', function (){
        
        ticTacToe.winner(btn)
    })
})


const ticTacToe = {
    player: 'X',

    computer: 'O',

    winner(btn){
        ticTacToe.computerChoice(btn)
        ticTacToe.showPlayerChoice(btn) 
        
        // removes the cell already taken
        buttons = buttons.filter(b => cells.includes(b.value) )
        //finds the winner if possible wins are met
        let player1Wins = possibleWins.some(outer => {
            
            const playerButtons = Array.from(document.querySelectorAll('button')).filter(e => e.innerText === this.player0)

            return out.every(e => playerButtons.find(b => b.value ===e))
            } )
       
        
        
        if(player1Wins){

            h2.innerText = `You've won!`

            winner.classList.remove('hidden')
            console.log('hi')

        }
        
        
      
       
        

    },

    computerChoice(btn){

        //generates a computer random cell
        let len = cells.length -2
        let random = Math.round(Math.random() * len)

        //if cell is already taken, checks for another random number
        while(cells[random] === btn.value){
            
            random = Math.round(Math.random() * len)
            
        }
             this.showComputer(random)
             cells.splice(random,1) 
        
    },
    showPlayerChoice(btn){
    
        //places 'X' in player cell
        btn.innerText = this.player

        cells.splice(cells.indexOf(btn.value), 1)

    },

    showComputer(cell){

        //places 'O' in computer cell
        buttons.forEach((b, i) => {
            if( i === cell){
                b.innerText = this.computer
                
            }
        
        })       

    }

}
