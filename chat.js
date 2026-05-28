
        document.addEventListener('DOMContentLoaded', function() {
            const chatMessages = document.getElementById('chatMessages');
            const userInput = document.getElementById('userInput');
            const sendButton = document.getElementById('sendButton');
            
            // Sample responses for different health queries
            const responses = {
                headache: "Headaches can have various causes. Common remedies include rest, hydration, and over-the-counter pain relievers. If headaches are severe, persistent, or accompanied by other symptoms, please consult a healthcare provider.",
                fever: "Fever is often a sign of infection. Ensure you stay hydrated and rest. If fever is above 103°F (39.4°C), persists for more than 3 days, or is accompanied by severe symptoms, seek medical attention.",
                cough: "Coughs can be due to colds, allergies, or other conditions. Honey tea, steam inhalation, and over-the-counter remedies may help. If cough persists for more than 2 weeks or you have difficulty breathing, see a doctor.",
                diet: "A balanced diet with fruits, vegetables, lean proteins, and whole grains is essential for good health. The exact nutritional needs vary based on age, gender, and activity level.",
                exercise: "Regular exercise is important for maintaining health. Most adults should aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, plus strength training.",
                sleep: "Adults generally need 7-9 hours of sleep per night. Good sleep hygiene includes maintaining a regular schedule, creating a restful environment, and avoiding screens before bedtime.",
                default: "I understand you're concerned about your health. While I can provide general information, it's important to consult with a healthcare professional for personalized medical advice. Could you tell me more about your symptoms?"
            };
            
            // Function to add a message to the chat
            function addMessage(message, isUser) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
                
                const contentDiv = document.createElement('div');
                contentDiv.classList.add('message-content');
                contentDiv.textContent = message;
                
                messageDiv.appendChild(contentDiv);
                chatMessages.appendChild(messageDiv);
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            // Function to process user input and generate a response
            function processInput(input) {
                input = input.toLowerCase();
                
                // Check for keywords and provide appropriate response
                if (input.includes('headache')) {
                    return responses.headache;
                } else if (input.includes('fever') || input.includes('temperature')) {
                    return responses.fever;
                } else if (input.includes('cough') || input.includes('coughing')) {
                    return responses.cough;
                } else if (input.includes('diet') || input.includes('nutrition') || input.includes('eat')) {
                    return responses.diet;
                } else if (input.includes('exercise') || input.includes('workout') || input.includes('fitness')) {
                    return responses.exercise;
                } else if (input.includes('sleep') || input.includes('tired') || input.includes('insomnia')) {
                    return responses.sleep;
                } else {
                    return responses.default;
                }
            }
            
            // Function to handle sending a message
            function sendMessage() {
                const message = userInput.value.trim();
                
                if (message) {
                    // Add user message to chat
                    addMessage(message, true);
                    
                    // Clear input
                    userInput.value = '';
                    
                    // Simulate AI thinking with a delay
                    setTimeout(() => {
                        // Generate and add bot response
                        const response = processInput(message);
                        addMessage(response, false);
                    }, 1000);
                }
            }
            
            // Event listeners
            sendButton.addEventListener('click', sendMessage);
            
            userInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
            
            // Emergency button functionality
            document.querySelector('.emergency-button').addEventListener('click', function() {
                addMessage("I've clicked the emergency help button. This would normally connect you to emergency services.", true);
                
                setTimeout(() => {
                    addMessage("In a real application, this would connect you to emergency services. For now, please call your local emergency number if you need immediate medical assistance.", false);
                }, 1000);
            });
        });