
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

        let player1Wins = possibleWins.some(out => out.every(el =>{ 
            for(let i = 0; i < buttons.length; i++){
                if(buttons[i].value === el && buttons[i].innerText === this.player){
                  console.log(true)
                }
                console.log(false)
            } }
            )
       
        )
        ticTacToe.computerChoice(btn)
        ticTacToe.showPlayerChoice(btn)
        if(player1Wins){

            h2.innerText = `You've won!`

            winner.classList.remove('hidden')
            console.log('hi')

        }
        // winner.classList.add('hidden')
        
           
        buttons = buttons.filter(b => cells.includes(b.value) )
       
        

    },

    computerChoice(btn){

        let len = cells.length -2
        let random = Math.round(Math.random() * len)

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
