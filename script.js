window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    var count = 0;

    const visual = document.querySelector('.visual');
    const colors = [
        "rebeccapurple",
        "green",
        "red",
        "black",
        "yellow",
        "pink"
    ];

    // Sounds
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[count].pause()
            sounds[count].currentTime = 0;
            sounds[index].play();

            createBubbles(index);

            count = index;
        });
    });

    //Visual
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1.3s ease";
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    };
});

