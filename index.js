const toDoList = [];

document.getElementById("textbox").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const userInput = event.target.value;
        if (userInput != "") {
            toDoList.push(userInput);
            console.log(toDoList)
            event.target.value = "";
        }
    }
})