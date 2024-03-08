  document.addEventListener('click', function() {
    const nikeLogo = document.getElementById('nike');
    const box1 = document.getElementById('box');
    const box2 = document.getElementById('box2');
    const sample = document.getElementById('sample')
    
    // Add 'move' class to trigger the animation
    nikeLogo.classList.add('move');
    
    // Add event listener for 'animationend' event on nikeLogo
    nikeLogo.addEventListener('animationend', function() {
        box1.classList.add('upi');
        box2.classList.add('downi');
        sample.style.visibility = 'visible';
        setTimeout(function(){
            box1.style.display = 'none';
            box2.style.display = 'none';
        }, 5000)
    }, { once: true });
}, { once: true });
