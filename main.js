        // Animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.animated');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
            
            // Simple chatbot functionality for demo
            const chatMessages = document.querySelector('.chat-messages');
            const chatInput = document.querySelector('.chat-input input');
            const chatSendBtn = document.querySelector('.chat-input .btn');
            
            chatSendBtn.addEventListener('click', function() {
                if (chatInput.value.trim() !== '') {
                    // Add user message
                    addMessage(chatInput.value, 'user');
                    
                    // Simulate bot response after a short delay
                    setTimeout(() => {
                        addMessage('Thank you for sharing. I recommend consulting with one of our doctors for proper diagnosis. Would you like to book an appointment?', 'bot');
                    }, 1000);
                    
                    // Clear input
                    chatInput.value = '';
                }
            });
            
            function addMessage(text, type) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.classList.add(type + '-message');
                messageDiv.textContent = text;
                
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        });