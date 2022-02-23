const p1 = {
    display: document.querySelector ('#p1h1'),
    button: document.querySelector('#p1'),
    score: 0
}

const p2 = {
    display: document.querySelector ('#p2h2'),
    button: document.querySelector('#p2'),
    score: 0
}

const reset = document.querySelector('#reset')
const winningSelect = document.querySelector('#select')
let winnerscore = 6
let gameover = false


function updateScores(player, opponent){
    if(!gameover){
        player.score +=1
        player.display.textContent = player.score
    }
    if( player.score === winnerscore){
        gameover = true
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        player.button.disabled= true
        opponent.button.disabled= true
}
}




p1.button.addEventListener('click', function(){
    updateScores(p1, p2)

})

p2.button.addEventListener('click', function(){
    updateScores(p2, p1)
    
    })

    winningSelect.addEventListener('change', function(){
        winnerscore = parseInt(this.value);
        resets()
        
    })

    reset.addEventListener('click', resets)
    
    function resets () {
        gameover = false
        for(let p of [p1,p2]){
            p.score = 0
            p.display.textContent = 0
            p.display.classList.remove('has-text-success', 'has-text-danger')
            p.button.disabled= false
        }
    }