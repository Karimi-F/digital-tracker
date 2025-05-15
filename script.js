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
    li.textContent = habit;
    li.addEventListener("click", () => li.classList.toggle("done"));
    habitList.appendChild(li);
}

function saveHabit(habit) {
    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.push(habit);
    localStorage.setItem("habits", JSON.stringify(habits));
}