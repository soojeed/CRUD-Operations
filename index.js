var selectedRow = null;

function showAlert(message, className){
   const div = document.createElement("div");
   div.className = `alert${className}`;

   div.appendChild(document.createTextNode(message));
   const container = document.querySelector(".container");
   const main = document.querySelector(".main");
   container.insertBefore(div, main);

   setTimeout(() => document.querySelector(".alert").remove(), 3000)
}


const clearFields = () => {
   document.querySelector("#name").value = "";
   document.querySelector("#email").value = "";
   document.querySelector("#phone").value = "";
}