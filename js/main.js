
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

let counter = 0;

document.querySelector('.home').addEventListener('click', function(){
    document.querySelector('.choose-player').classList.remove('hidden')
    document.querySelector('.main-wrapper').classList.add('hidden')
})


document.querySelector('.one-player').addEventListener('click', function(){
    document.querySelector('.main-wrapper').classList.remove('hidden')

    document.querySelector('.choose-player').classList.add('hidden')
    const keys = document.querySelectorAll('button').forEach((btn, i)=> {
    btn.addEventListener('click', function (){
        if (btn.innerText == ''){
          ticTacToe.winner1PlayerGame(btn)  
        }
        
    })
})
})



document.querySelector('.two-player').addEventListener('click', function(){
    document.querySelector('.main-wrapper').classList.remove('hidden')

    document.querySelector('.choose-player').classList.add('hidden')

    
    document.querySelector('.choose-player').classList.add('hidden')
    const keys = document.querySelectorAll('button').forEach((btn, i)=> {
    btn.addEventListener('click', function (){

        if(btn.innerText == ''){
              (counter % 2 ===0)? btn.innerText = 'X' : btn.innerText = 'O' 
        ticTacToe.winner2PlayerGame(btn)
        counter++
        }
       
    })
})
})



document.querySelector('.restart-btn').addEventListener('click', function (){
    ticTacToe.restart()
})


const ticTacToe = {
    player: 'X',

    computer: 'O',

    winner1PlayerGame(btn){

        ticTacToe.computerChoice(btn)
        ticTacToe.showPlayerChoice(btn)

        // removes the cell already taken
        buttons = buttons.filter(b => cells.includes(b.value) )

        //finds the winner if possible wins are met
        let player1Wins = possibleWins.some(out => {
            const playerButtons  = [...document.querySelectorAll('button')]
                .filter(e => e.innerText === this.player)
            return out.every(e => playerButtons.find(b => b.value === e))
        })

        let computerWins = possibleWins.some(out => {
            const computerButtons =  [...document.querySelectorAll('button')]
            .filter(e => e.innerText === this.computer)

            console.log(computerButtons)
            return out.every(e => computerButtons.find(b => b.value === e))
        })
        if(player1Wins){

            h2.innerText = `You've won!`

            winner.classList.remove('hidden')
            console.log('hi')

        }else if(cells.length ===1){
            h2.innerText = `It's a tie`
            winner.classList.remove('hidden')
        }    
       else if(computerWins){
            h2.innerText = `Oops... You've lost!`
            winner.classList.remove('hidden')
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

    },

    restart(){

        winner.classList.add('hidden');

        buttons = [...document.querySelectorAll('button')]
        cells = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']
        const newBtns =[...document.querySelectorAll('button')].map(el => el.innerText = '')
    }, 
    
    winner2PlayerGame(btn){


        //finds the winner if possible wins are met
        let player1Wins = possibleWins.some(out => {
            const playerButtons  = [...document.querySelectorAll('button')]
                .filter(e => e.innerText === this.player)
            return out.every(e => playerButtons.find(b => b.value === e))
        })

        let player2Wins = possibleWins.some(out => {
            const computerButtons =  [...document.querySelectorAll('button')]
            .filter(e => e.innerText === this.computer)

            
            return out.every(e => computerButtons.find(b => b.value === e))
        })
        let remainBtn = [...document.querySelectorAll('button')].filter(b => b.innerText == '')
        if(player1Wins){

            h2.innerText = `X's have won!`

            winner.classList.remove('hidden')
            console.log('hi')

        }
        else if(remainBtn.length ===1){
            h2.innerText = `It's a tie`
            winner.classList.remove('hidden')
        }    
       else if(player2Wins){
            h2.innerText = `O's has won!`
            winner.classList.remove('hidden')
        }
        console.log(remainBtn)
    }

}


