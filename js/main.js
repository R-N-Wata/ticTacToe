
let playerObject = []

document.querySelectorAll('button').forEach(btn => playerObject.push(btn.value))

console.log(playerObject)

   let max = 8;

 let arr = [...document.querySelectorAll('button')]



const keys = document.querySelectorAll('button').forEach((btn, i)=> {
    btn.addEventListener('click', function (){

     
        if(btn.innerText !== 'O' && btn.innerText !== 'X'){
           ticTacToe.showPlayerChoice(i)
            ticTacToe.computerChoice()
            console.log(playerObject) 
        }
            
           

        console.log(playerObject)
        ticTacToe.winner()
    })
})






const ticTacToe = {
    player: 'X',

    computer: 'O',

    winner(){

        playerObject.forEach(btn => {
            if(btn.click === true){
                this.showPlayerChoice()
                this.showComputer()
                console.log('hi')
            }
        })

    },

    computerChoice(){

        
        let random = Math.round(Math.random() * ((playerObject.length-1) - 0) - 0)

        this.showComputer(random);

        playerObject.splice(random, 1)
        console.log(playerObject.length -1)
    },

    showPlayerChoice(btn){
      
        btn.innerText = this.player
          
    },

    showComputer(zero){

        // if (playerObject[zero].innerText === ''){
         
        // }

       

        arr.forEach(btn => {
            if (btn.value === playerObject[zero] && btn.innerText === ''){
                btn.innerText = this.computer 
            }
        })
           
        
        
    }




}
