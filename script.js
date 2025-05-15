const form = document.getElementById('habit-form');
const habitInput = document.getElementById('habit');
const habitList = document.getElementById('habit-list');

document.addEventListener('DOMContentLoaded', () => {
    const habits = JSON.parse(localStorage.getItem('habits')) || [];
    habits.forEach(addHabitToDOM);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const habit = habitInput.value.trim();
    if (habit !==  "") {
        addHabitToDOM(habit);
        saveHabit(habit);
        habitInput.value = "";
    }
});

function addHabitToDOM(habit) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `habit-${habitList.children.length + 1}`;

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            li.classList.add("done");
        } else {
            li.classList.remove("done");
        }
    });

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = habit;

    li.appendChild(checkbox);
    li.appendChild(label);
    habitList.appendChild(li);
}

function saveHabit(habit) {
    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.push(habit);
    localStorage.setItem("habits", JSON.stringify(habits));
}