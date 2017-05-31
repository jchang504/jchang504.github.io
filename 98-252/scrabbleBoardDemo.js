$(document).ready(function() {
  var across = true;
  $('input').click(function() {
    across = true;
  });
  $('input').dblclick(function() {
    across = false;
  });

  $('input').change(function() {
    var letter = $(this).val();
    if (letter.length > 0) {
      $(this).val(letter);
      $(this).parent().css('background-color', 'tan');
    }
    else {
      $(this).parent().css('background-color', '');
    }
  });

  $('input').keypress(function(k) {
    if (across) {
      var nextCell = $(this).parent().next();
      if (nextCell) {
        nextCell.find('input').focus();
      }
    }
    else { // down
      var col = $(this).parent().prop('cellIndex') + 1;
      var nextRow = $(this).parent().parent().next();
      if (nextRow) {
        var nextCell = nextRow.find('td:nth-child(' + String(col) + ')');
        if (nextCell) {
          nextCell.find('input').focus();
        }
      }
    }
  });

  // for deleting last tile added
  $('input').keyup(function(k) {
    if (k.keyCode == 8) {
      if (across) {
        var lastCell = $(this).parent().prev();
        if (lastCell) {
          var tile = lastCell.find('input');
          tile.val('');
          tile.change();
          tile.focus();
        }
      }
      else { // down
        var col = $(this).parent().prop('cellIndex') + 1;
        var lastRow = $(this).parent().parent().prev();
        if (lastRow) {
          var lastCell = lastRow.find('td:nth-child(' + String(col) + ')');
          if (lastCell) {
            var tile = lastCell.find('input');
            tile.val('');
            tile.change();
            tile.focus();
          }
        }
      }
    }
  });

  $('#clear').click(function() {
    $('input').val('');
    $('input').change();
  });

  $('#coords').click(function() {
    var vis = $('td.hidable').css('visibility');
    if (vis == 'hidden') {
      $('td.hidable').css('visibility', 'visible');
    }
    else { // already visible
      $('td.hidable').css('visibility', 'hidden');
    }
  });

});
