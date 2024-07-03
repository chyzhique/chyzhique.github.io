        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.element, .arrow');
            
            elements.forEach(element => {
                element.addEventListener('click', function() {
                    const targetId = this.getAttribute('data-target');
                    const currentActive = document.querySelector('.main.active, .passage.active');
                    const targetElement = document.getElementById(targetId);
                    
                    if (currentActive && targetElement) {
                        currentActive.classList.remove('active');
                        targetElement.classList.add('active');
                    }
                });
            });
        });
