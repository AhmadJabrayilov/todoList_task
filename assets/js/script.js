const form = document.querySelector("form");

const todolistBox = document.querySelector(".todo-list-box");
const input = document.querySelector(".form-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim().length === 0) {
    alert("error");
  } else {
    const todoListItem = Array.from(
      document.querySelectorAll(".todo-list-item span")
    );
    if (!todoListItem.find((x) => x.textContent === input.value)) {
      todolistBox.innerHTML += `<div class="todo-list-item">
            <span>${input.value}</span>
            <button class="btn remove-btn"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
    }
    else{
        alert("errorr")
    }

    const removeBtn = document.querySelectorAll(".remove-btn")

    removeBtn.forEach(btn => {
        btn.addEventListener("click", ()=>{
            btn.parentElement.remove();
        } )
    })

  }
});
