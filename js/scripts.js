function newItem() {

  //1. Adding a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#taskInput').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
    $('#taskInput').val('');
  }




  //2. Crossing out an item from the list of items:
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  })

  //3(i). Adding the delete button "X":
  let crossOutButton = $('<button class="crossOutButton">X</button>');
  li.append(crossOutButton);
  crossOutButton.on('click', deleteListItem);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.addClass('delete');
  }

  // 4. Reordering the items:
  $('#list').sortable();

}

let inputValue = $('#taskInput').val();
  $('#taskInput').on('keydown', function(e) {
    if (e.key == 'Enter') {
      newItem();
      e.preventDefault();
      $('#taskInput').val('');
    }
  });
