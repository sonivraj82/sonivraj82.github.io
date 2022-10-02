function sign_in() {
  location.replace('Log_In_Form.html')
}

function view_cart() {
  location.replace('view_cart.html')
}

function dashboard() {
  location.replace("/account_dashboard.html")
}

function onChange() {
  const password = document.querySelector('input[id=pwd]');
  const confirm = document.querySelector('input[id=cpwd]');
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } 
  
  else {
    confirm.setCustomValidity('Passwords do not match');
  }
}