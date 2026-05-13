function AddTask() {
  const taskInput = document.getElementById("taskInput");

  const task = taskInput.value.trim();

  if (task === "") {
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  li.innerHTML = `

    <span>
      ${task}
    </span>

    <button
      class="btn btn-outline-danger"
      onclick="DeleteTask(this)"
    >

      <i class="bi bi-trash"></i>

      Delete

    </button>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
}

function DeleteTask(button) {
  button.parentElement.remove();
}
