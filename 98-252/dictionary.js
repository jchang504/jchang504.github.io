$(document).ready(loadTST);

function loadTST() {
  $.getScript('TST.js', loadDict);
}

function loadDict() {
  $.get('OWL2_nodef_lc.dat', main);
}

function main(data) {
  var wordList = data.split('\n');
  if (wordList[wordList.length-1].length == 0) {
    wordList.length--;
  }
  var tst = new TST(wordList);

  $('#check').submit(function(e) {
    e.preventDefault();
    var word = $('#word').val().toLowerCase();
    if (tst.lookup(word)) {
      $('#result').html(word.toUpperCase() + '\n<br>\nis\n<br>\n<span class="good">GOOD</span>');
    }
    else {
      $('#result').html(word.toUpperCase() + '\n<br>\nis\n<br>\n<span class="bad">NOT good</span>');
    }
  });
}
