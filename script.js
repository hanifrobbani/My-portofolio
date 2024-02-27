const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

//membuat hamburger menu
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const borderNav = document.getElementById("navbar");

// Menambahkan event listener pada elemen window untuk mendeteksi scroll
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    borderNav.style.borderBottom = "none";
  } else {
    borderNav.style.borderBottom = "1px solid gainsboro";
  }
});


function checkForm() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  
  var sendBtn = document.getElementById('sendBtn');
  
  if (name !== '' && email !== '' && message !== '') {
      sendBtn.disabled = false; 
    } else {
      sendBtn.disabled = true; 
    }
}

// Tambahkan event listener untuk memeriksa form setiap kali ada perubahan
document.getElementById('name').addEventListener('input', checkForm);
document.getElementById('email').addEventListener('input', checkForm);
document.getElementById('message').addEventListener('input', checkForm);


function showCustomAlert() {
  var customAlert = document.getElementById('custom-alert');
  customAlert.style.display = 'block'; 
  setTimeout(function() {
      customAlert.classList.add('show');
  }, 10); 
}

function closeCustomAlert() {
  var customAlert = document.getElementById('custom-alert');
  customAlert.classList.remove('show');
  setTimeout(function() {
      customAlert.style.display = 'none'; 
  }, 300); 
}

