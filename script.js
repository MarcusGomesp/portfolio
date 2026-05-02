   // 1. Efeito de Brilho nos Cards (Mouse Move)
        document.getElementById("projetos").onmousemove = e => {
            for(const card of document.getElementsByClassName("project-card")) {
                const rect = card.getBoundingClientRect(),
                      x = e.clientX - rect.left,
                      y = e.clientY - rect.top;
                
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        // 2. Animação de Scroll (Reveal)
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 150;

            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Trigger inicial

        // 3. Sistema de Partículas do Background (Canvas)
        const canvas = document.getElementById("bg-canvas");
        const ctx = canvas.getContext("2d");
        
        let width, height;
        let particles = [];
        
        // Configuração de cores baseadas no tema (.NET/Backend style)
        const colors = ['rgba(99, 102, 241, 0.4)', 'rgba(14, 165, 233, 0.4)'];
        
        let mouse = { x: null, y: null, radius: 150 };

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });
        
        window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        });

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Rebater nas bordas
                if (this.x > width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > height || this.y < 0) this.speedY = -this.speedY;

                // Interação com o mouse
                if (mouse.x && mouse.y) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const maxDistance = mouse.radius;
                        const force = (maxDistance - distance) / maxDistance;
                        const directionX = forceDirectionX * force * 2;
                        const directionY = forceDirectionY * force * 2;
                        
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            // Ajusta a quantidade de partículas baseado no tamanho da tela
            let numberOfParticles = (width * height) / 12000;
            if(numberOfParticles > 120) numberOfParticles = 120; // Limite para performance
            
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                // Conectar partículas próximas (Efeito "Rede")
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 - distance/120})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        // Inicialização
        resize();
        initParticles();
        animateParticles();