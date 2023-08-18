const reminderSubmitBtn = document.querySelector("#reminder-submit-btn");
const reminderInput = document.querySelector("#reminder-input");
const reminderList = document.querySelector("#reminder-list");


//Stores the reminders in an array
const reminders = [];


//Takes the user's input and pushes it to the reminders array
function addNewReminder(input) {
    reminders.push(input.value);
}

function editReminder(e) {
    //Receive user input to edit reminder text
    let newReminderText = prompt("Edit your text here");

    //selects the paragraph element of the reminder list item
    let textToEdit = document.querySelector(`#${e.target.parentNode.id} p`);

    //changes the reminder text to the user supplied text from the prompt
    textToEdit.innerText = newReminderText;
}

function deleteReminder(e) {
    //Uses unary operator in front of the sliced ID to convert it to an Int
    let item = +e.target.parentNode.id.slice(-1);

    //Deletes reminder from the reminders array
    if (reminders.length === 1) {
        reminders.slice(0, 1);
    }

    reminders.splice(item, 1);

    console.log(reminders);

    //Re-renders the reminders list
    displayReminders(reminders);
}

//Is used to create reminder list items after user submits their input.
function createReminder(input) {
    const li = document.createElement('li');
    const para = document.createElement('p');
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    para.innerText = input;
    editBtn.innerText = "Edit reminder";
    delBtn.innerText = "Delete reminder";

    li.append(para, editBtn, delBtn);

    editBtn.addEventListener("click", e => {
        e.preventDefault();

        editReminder(e);
    })

    delBtn.addEventListener("click", e => {
        e.preventDefault();

        deleteReminder(e);
    })

    return li;
}

//Loops through the reminders array, adds a unique id to each reminder, and displays each item in a list
function displayReminders(arr) {
    reminderList.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        let reminder = createReminder(arr[i]);
        reminder.id = `reminder-${i}`;

        reminderList.appendChild(reminder);
    }
}

reminderSubmitBtn.addEventListener("click", e => {
    e.preventDefault();    

    addNewReminder(reminderInput);
    displayReminders(reminders);
    reminderInput.value = '';
});

reminderInput.addEventListener("keypress", e => {   

    if (e.key === "Enter") {
        reminderSubmitBtn.click();
    }
})