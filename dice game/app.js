
roll= () =>{
    let audio = document.getElementById('audio');
    audio.play();
    document.getElementById('dice-id').innerHTML = "";
    document.getElementById('dice').classList.add('dice-animation');
    setTimeout(()=>{
        let dicevalue = Math.floor(Math.random()*6);
        document.getElementById('dice-id').innerHTML = dicevalue
    },3000)
    setTimeout(()=>{
    document.getElementById('dice').classList.remove('dice-animation');

    },3000)
}