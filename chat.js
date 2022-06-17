const handleInscription = () => {
  userName = document.getElementById('userName').value;
  document.getElementById('login').style.display = 'none';
  document.getElementById('box').style.display = 'unset';
  document.getElementById('messageSend').style.display = 'unset';
  socket.emit("message", { data: `Alerte: ${userName} rejoint le chat` })
}

const handleMessageEmit = () => {
  socket.emit('message', { data: userName + ": " + document.getElementById('message').value })
  document.getElementById('message').value = '';
}

document.getElementById('userName').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleInscription();
})

document.getElementById('message').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleMessageEmit();
})

document.getElementById('logbtn').addEventListener('click', handleInscription)
document.getElementById('btn').addEventListener('click', handleMessageEmit)