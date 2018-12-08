function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('delete');
 
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function deleteChat(){
        socket.emit("del message");
        // var pd = document.getElementById('chatP');
        // chatDiv.removeChild(pd);
    }
    button.onclick = handleSubmit;
    del.onclick = deleteChat;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.className = "chatP";
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}
    function deleteChatFromDom(){
        var x = document.getElementsByClassName('chatP');
        for(var i in x){
            chatDiv.removeChild(x[0]);
        }
    }

socket.on('display message', handleMessage);
socket.on("delete you too", deleteChatFromDom);
} // main closing bracket

window.onload = main;