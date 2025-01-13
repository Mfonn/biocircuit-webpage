// script.js

// Web Speech API for article reading
const articleContent = document.getElementById('article-content').innerText;
const listenBtn = document.getElementById('listen-btn');

listenBtn.addEventListener('click', () => {
    const speech = new SpeechSynthesisUtterance(articleContent);
    speech.lang = 'en-US';
    speech.rate = 1.0;
    speech.pitch = 1.0;
    window.speechSynthesis.speak(speech);
});

// Motion background using Canvas
const canvas = document.getElementById('motion-background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 100;

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 123, 255, 0.5)';
        ctx.fill();
    }
}

function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 1 - 0.5;
        const speedY = Math.random() * 1 - 0.5;
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();


// Newsletter subscription prompt
document.querySelector('a[href="#subscribe"]').addEventListener('click', function (e) {
    e.preventDefault();
    const email = prompt("Enter your email address to subscribe to our newsletter:");
    if (email) {
        alert(`Thank you for subscribing, ${email}!`);
        // Optionally: send the email to a server
    }
});


