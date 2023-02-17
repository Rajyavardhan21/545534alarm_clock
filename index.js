let para = document.getElementById('para');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

window.addEventListener('load',() => {
    text.placeholder = new Date().getHours();
    text2.placeholder = new Date().getMinutes();
});

btn.addEventListener('click', Alarm);

let x;

function Alarm(){
    if (text.value && text2.value){
        x = setInterval(() => {
            SetAlarm();
        }, 1000);
    } else {
        alert('Enter the hrs and mins!');
    }
}

function SetAlarm() {
    let d = new Date().toString();
    // alert(d);
    let then = new Date(`${d} ${text.value}:${text2.value}`).getTime();
    let now = new Date().getTime();
    let distance = then - now;
   alert(then);
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    para.innerHTML = `ALARM IN - ${hours}:${minutes}:${seconds}`;
    if (distance < 0) {
        clearInterval(x);
        para.innerHTML = `It's Alarm Time!`;
        let audio = new Audio('1.mp3');
        audio.play();
        btn2.style.visibility = 'visible';
        btn2.addEventListener('click', () => {
            para.innerHTML = ``;
            audio.pause();
            btn2.style.visibility = 'hidden';
            text.value = '';
            text2.value = '';
        });
    }
}
