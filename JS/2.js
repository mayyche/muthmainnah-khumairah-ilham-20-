function validateLogin() {
    const username = documen.getElementById('username').value;
    const password = documen.getElementById('password').value;
    const popup = documen.getElementById('popup');
    const popupMessage = documen.getElementById('popupMessage');
     
   {
      popupMessage.textContent = "mo login gax?";
      popup.style.display = "block";
    } 
    return false;
  }

  function closePopup() {
    documen.getElementById('popup').style.display = 'none';
  }
  function openPopup(){
    documen.getElementById('popup').style.display = 'block';
    window.location = "projek kelompok 2.html";
  }
