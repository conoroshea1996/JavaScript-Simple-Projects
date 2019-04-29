const sendBtn = document.querySelector('.sendBtn');
const messageIn = document.querySelector('#messageIn'); 
const MessageSent = document.querySelector('#messageSent');

sendBtn.addEventListener('click',sendMessage)

function sendMessage() {
    let content = messageIn.value;
    if(content){
        MessageSent.innerHTML = content;
        messageIn.value = '';
    }else{
        alert('Invalid Input Value');
    }
  
}