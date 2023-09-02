//create a const declaration for our url endpoint
const URL_ENDPOINT = "http://localhost:3000/users";

//display the info to make sure its working and then loop over data and append to a table
$.get(URL_ENDPOINT).then(data => console.log(data));
$.get(URL_ENDPOINT).then(data => {
  data.map(user => {
    $(`tbody`).append(`
    <tr style="background-color: white;">
    <td>${user.id}</td>
    <td>${user.fullName}</td>
    <td>${user.bookName}</td>
    <td>${user.bookPages}</td>
    <td>${user.bookRating}</td>
    <td>
    <button type="button" class="btn btn-danger" onclick="deleteUser(${user.id})">☒</button>
    </td>
    </tr>
    `)
  })
})


//use the POST method to add new users books and ratings to the table by adding an event listener or .click onto the button that will then push the data onto the table created
$(`#submitUserInfo`).click(function () {
  $.post(URL_ENDPOINT, {
    fullName:$(`#newFullName`).val(),
    bookName:$(`#newBook`).val() ,
    bookPages:$(`#newPages`).val() ,
    bookRating:$(`#newBookRating`).val() 
  })
})
//create a delete function that will delete the users info, ID as the parameter, use ajax to delete off of the URL
function deleteUser(id) {
  $.ajax(`${URL_ENDPOINT}/${id}` , {
    type: `DELETE`
  })
}
//create a update user function that will change info of a certain user id using PUT, add an event listener to the update button so that when its clicked the updateUser function gets activated
function updateUser() {
  let id = $(`#updateID`).val();

  $.ajax(`${URL_ENDPOINT}/${id}`, {
    method: `PUT`,
    data: {
      fullName:$(`#updateName`).val(),
      bookName:$(`#updateBook`).val() ,
      bookPages:$(`#updatePages`).val() ,
      bookRating:$(`#updateRating`).val()
    }
  })
};

$(`#updateUser`).click(updateUser);