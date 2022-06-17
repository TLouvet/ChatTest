let userName = '';
const socket = io('https://chat-app-tl.herokuapp.com/');
socket.on('connect', function () {
  console.log('Connected');

  socket.emit('events', { test: 'test' });
  socket.emit('identity', 0, response =>
    console.log('Identity:', response),
  );
});

socket.on('disconnect', function () {
  document.getElementById('box').innerHTML += `<p>${userName} a quitté le chat`;
})

socket.on('message', ({ data }) => {
  const setP = () => {
    if (data.split(':')[0] === "Alerte") return `<p style="color:red;">${data}</p>`;
    else if (data.split(':')[0] !== "Alerte" && data.split(':')[0] !== userName) return `<p style="text-align: end; margin:0;"> <span style="font-weight: 800">${data.split(':')[0]}:</span>${data.split(':')[1]}</p>`;
    else return `<p style="margin: 0;"> <span style="font-weight: 800">${data.split(':')[0]}:</span>${data.split(':')[1]}</p>`;
  }

  const cls = () => {
    if (data.split(':')[0] === "Alerte") return "";
    else if (data.split(':')[0] !== "Alerte" && data.split(':')[0] !== userName) return "userMessageBox";
    else return 'otherUserMessageBox';
  }

  const div = document.createElement('div');
  div.setAttribute('class', cls());
  div.innerHTML = setP();
  document.getElementById('box').appendChild(div);
})


