const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});

function sendMessage(){

    const message = userInput.value.trim();

    if(message === "") return;

    // User Message
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerText = message;

    chatBox.appendChild(userMessage);

    // AI Reply
    setTimeout(() => {

        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");

        botMessage.innerText = getBotReply(message);

        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    userInput.value = "";
}

function getBotReply(message){

    message = message.toLowerCase();

    if(message.includes("hello")){
        return "Hello 👋";
    }

    else if(message.includes("how are you")){
        return "I'm fine 😊";
    }

    else if(message.includes("your name")){
        return "I'm AI Chat Bot 🤖";
    }

    else if(message.includes("bye")){
        return "Good Bye 👋";
    }

    else{
        return "Sorry, I don't understand 😅";
    }
}