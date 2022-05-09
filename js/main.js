
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

const keys = document.querySelectorAll('button').forEach((btn, i)=> {
    btn.addEventListener('click', function (){
        
        ticTacToe.winner(btn)
    })
})


const ticTacToe = {
    player: 'X',

    computer: 'O',

    winner(btn){

        if(box0.innerText === 'X' && box1.innerText === 'X' && box2.innnerText === 'X'){

            h2.innerText = `You've won!`

            winner.classList.remove('hidden')
            console.log('hi')

        }else {
            ticTacToe.computerChoice(btn)
        ticTacToe.showPlayerChoice(btn)
        buttons = buttons.filter(b => cells.includes(b.value) )
        buttons.forEach(b => console.log(b.value))
        }

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
