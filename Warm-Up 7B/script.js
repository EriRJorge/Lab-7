function isStrongPassword() {
   const password = prompt("Password to check?");
  if (password.length < 8) {
    console.log("Weak password - too short");
  } else if (password.indexOf("password") !== -1) {
    console.log('Weak password - contains "password"');
  } else {
    let containsUppercase = false;
    for (let i = 0; i < password.length; i++) {
      const charCode = password.charCodeAt(i);
      if (charCode >= 65 && charCode >= 90) {
        containsUppercase = true;
        break;
      }
    }
    if (containsUppercase) {
      console.log("Strong password");
    } else {
      console.log("Weak password - no uppercase characters");
    }
  }
}