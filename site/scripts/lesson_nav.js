        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('.arrow');
            const backs = document.querySelectorAll('.back');
            const passages = document.querySelectorAll('.passage');

            links.forEach(link => {
                link.addEventListener('click', function() {
                    const target = this.getAttribute('data-target');
                    
                    // Hide all passages
                    passages.forEach(passage => passage.classList.remove('active'));
                    
                    // Show the target passage
                    document.getElementById(target).classList.add('active');
                });
            });
          
          backs.forEach(back => {
                link.addEventListener('click', function() {
                    const target = this.getAttribute('data-target');
                    
                    // Hide all passages
                    passages.forEach(passage => passage.classList.remove('active'));
                    
                    // Show the target passage
                    document.getElementById(target).classList.add('active');
                });
            });
        });
