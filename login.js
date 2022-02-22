getAuth()
  .getUserByEmail(email)
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });

function login(){
    var userEmail = document.getElementById("emailField").value;
    var userPass = document.getElementById("passwordField").value;
    window.alert(userEmail + "  " + userPass);
}