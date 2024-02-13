function titleCase(str) {
  const words = str.toLowerCase().split(' ');
  
  for (i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  
  return words.join(' ');
}


function add() {
  let data = titleCase(document.querySelector('.add').value);

  document.querySelector('.out').value = data;
  document.querySelector('.add').value = '';
}



