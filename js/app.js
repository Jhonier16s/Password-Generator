const empty = "";
const uCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnñopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&/*=-_)(";

const pLength = document.getElementById("pass-length");
const upperCase = document.getElementById("pass-uppercase");
const lowerCase = document.getElementById("pass-lowercase");
const pNumber = document.getElementById("pass-number");
const pSymbol = document.getElementById("pass-symbols");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", () => {
  let initialPassword = empty;
  upperCase.checked ? (initialPassword += uCase) : "";
  lowerCase.checked ? (initialPassword += lCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";

  password.value = generatePassword(pLength.value, initialPassword);
});

function generatePassword(l, initialPassword) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}

const enterKey = document.addEventListener("keydown", (e)=>{
    generatePassword();  
});

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
  if (password.value == "") {
    const errorModal = document.getElementById("modal-error");
    errorModal.classList.add("container-show");
    const btnErrorModal = document.getElementById("btn-modal-error");
    errorModal.classList.add("error-message")
    btnErrorModal.addEventListener("click", () => {
      errorModal.classList.remove("container-show");
     
    });
    const eventKey = document.addEventListener("keydown", (e) => {
        if (e.keyCode == 27) return errorModal.classList.remove("container-show");
      });

  } else {
    password.select();
    document.execCommand("copy");

    const modal = document.getElementById("modal");
    modal.classList.add("container-show");
    const btnModal = document.getElementById("btn-modal");

    btnModal.addEventListener("click", () => {
      modal.classList.remove("container-show");
    });
    const eventKey = document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) return modal.classList.remove("container-show");
    });
  }
});
