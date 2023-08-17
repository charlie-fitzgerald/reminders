const reminderSubmitBtn = document.querySelector("#reminder-submit-btn");
const reminderInput = document.querySelector("#reminder-input");
const reminderList = document.querySelector("#reminder-list");

const reminders = [];

function addNewReminder(input) {
    reminders.push(input.value);
}

function createReminder(item) {
    const li = document.createElement('li');
    li.innerText = item;

    return li
}

function displayReminders(arr) {

    for (let i = 0; i < arr.length; i++) {
        let reminder = createReminder(arr[i]);
        reminder.id = `item-${i}`;

        reminderList.appendChild(reminder);
    }

}

reminderSubmitBtn.addEventListener("click", e => {
    e.preventDefault();

    
    reminderList.innerHTML = '';

    addNewReminder(reminderInput);
    displayReminders(reminders);
    reminderInput.value = '';
});

reminderInput.addEventListener("keypress", e => {   

    if (e.key === "Enter") {
        reminderSubmitBtn.click();
    }
})