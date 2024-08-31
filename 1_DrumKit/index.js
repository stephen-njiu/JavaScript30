function playSound(e){
    const keyChar = e.key;
    const num = keyChar.charCodeAt(0);
    const audio = document.querySelector(`audio[data-key='${num}'`);
    const key = this.document.querySelector(`.key[data-key='${num}'`);
    if(!audio)return;
    audio.currentTime = 0; //rewind to the start of the audio
    audio.play();
    key.classList.add('playing')
    const keys  = document.querySelectorAll('.key');
    keys.forEach(key =>key.addEventListener('transitionend',removeTransition)); 
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return; // skip from logging if it is not transform
    this.classList.remove('playing');
    // console.log(this);
}
// FOR CAPTURING keyboard keys, we use the the window instead of the document
window.addEventListener('keydown', playSound);