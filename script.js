// Create elegant particle effect
function createParticles() {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
}

// Add particle style
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: fixed;
        width: 6px;
        height: 6px;
        top: -10px;
        animation: fall linear forwards;
        z-index: 1000;
        opacity: 0.6;
        border-radius: 50%;
        box-shadow: 0 0 10px currentColor;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg) scale(0.5);
            opacity: 0;
        }
    }
`;

document.head.appendChild(style);

// Create initial particles
createParticles();

// Create more particles every 5 seconds
setInterval(createParticles, 5000);

// Enhanced hover effect for decorative elements
document.querySelectorAll('.decorative-element').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.opacity = '0.3';
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    element.addEventListener('mouseout', () => {
        element.style.opacity = '0.1';
        element.style.transform = 'scale(1)';
    });
});

// Enhanced parallax effect
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.birthday-card');
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    
    card.style.transform = `translate(${x}px, ${y}px) rotateX(${y}deg) rotateY(${-x}deg)`;
});

// Add elegant background music
const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
audio.loop = true;
audio.volume = 0.3;

// Play music on first interaction
document.addEventListener('click', () => {
    audio.play();
}, { once: true });

// Enhanced typing effect
const quote = document.querySelector('.quote');
const text = quote.textContent;
quote.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        quote.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    typeWriter();
    document.body.classList.add('loaded');
});

// Enhanced Gallery Image Loading Animation
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px) rotateX(10deg)';
    
    setTimeout(() => {
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0) rotateX(0)';
    }, 500 + (index * 200));
});

// Enhanced Gallery Image Click Handler
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-image');
        const caption = item.querySelector('.gallery-caption');
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${img.src}" alt="${img.alt}">
                <div class="modal-caption">${caption.textContent}</div>
                <button class="modal-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add modal styles
        const modalStyle = document.createElement('style');
        modalStyle.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                backdrop-filter: blur(10px);
            }
            
            .modal.active {
                opacity: 1;
            }
            
            .modal-content {
                position: relative;
                max-width: 90%;
                max-height: 90vh;
                background: white;
                padding: 1.5rem;
                border-radius: 15px;
                transform: scale(0.9) translateY(20px);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
            
            .modal.active .modal-content {
                transform: scale(1) translateY(0);
            }
            
            .modal-content img {
                max-width: 100%;
                max-height: 80vh;
                object-fit: contain;
                border-radius: 8px;
            }
            
            .modal-caption {
                margin-top: 1.5rem;
                text-align: center;
                color: #2c3e50;
                font-size: 1.1rem;
                font-weight: 500;
            }
            
            .modal-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                font-size: 2rem;
                color: #2c3e50;
                cursor: pointer;
                padding: 0.5rem;
                line-height: 1;
                transition: transform 0.3s ease;
            }
            
            .modal-close:hover {
                transform: rotate(90deg);
            }
        `;
        
        document.head.appendChild(modalStyle);
        
        // Show modal with animation
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        // Close modal with animation
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.className === 'modal-close') {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.remove();
                    modalStyle.remove();
                }, 300);
            }
        });
    });
});
    
// Add scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item, .message, .quote').forEach(el => {
    observer.observe(el);
}); 