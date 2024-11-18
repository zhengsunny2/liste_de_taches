document.getElementById('modifier').addEventListener('click', function() {
    var texte = prompt('Entrez le nouveau texte :');
    document.querySelector('p').textContent = texte;
  });
  