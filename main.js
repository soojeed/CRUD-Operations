var selectedRow = null;

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//Clear All Fields

function clearFields(){
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";    
}

//Add Data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

    if (name === "" || email === "" || phone === "") {
        showAlert("Please fill in all fields", "danger");
    }else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            showAlert("Student Data Added", "success");
            clearFields();
        } else{
            selectedRow.children[0].textContent = name;
            selectedRow.children[1].textContent = email;
            selectedRow.children[2].textContent = phone;
            selectedRow = null;
      }
    }
});

// Edit Data
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#name").value = selectedRow.children[0].textContent;
        document.querySelector("#email").value = selectedRow.children[1].textContent;
        document.querySelector("#phone").value = selectedRow.children[2].textContent;
    }
});
//Delete Data

document.querySelector("#student-list").addEventListener("click", (e) => {
   target = e.target;
   if(target.classList.contains("delete")){
       target.parentElement.parentElement.remove();
       showAlert("Student Data Deleted", "danger");
   }
})