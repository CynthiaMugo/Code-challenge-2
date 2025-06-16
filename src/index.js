document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("guest-form");
    const input = document.getElementById("guest-name"); //Name of the guest input field

    // console.log(input);
    // console.log(form);

    // event listener to the form to handle the submission
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const guestName = input.value.trim(); // Get the trimmed value of the input field
            if (guestName === "") { // empty input
                alert("Please enter a guest name.");
                return;
            }
            // call function to handle the submit event
            handleClick(guestName);



            form.reset(); 
    })
    // Function to handle the click event and add the guest name to the list
    const handleClick = (guestName) => {
        const addGuest = document.getElementById("guest-list"); // list where guests will be added
        const parItem = document.createElement("p");
        parItem.textContent = `${guestName} `; // Create a new paragraph element with the guest name
        addGuest.appendChild(parItem);
        parItem.style.fontSize = "20px";

        //remove a guest from the list using a delete button.
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        parItem.appendChild(deleteBtn);
        // style the delete button
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.borderRadius = "5px";

        // Remove the paragraph element from the list
        deleteBtn.addEventListener("click", () => {
            addGuest.removeChild(parItem); 
        });

        //limit the number of guests to 10
        if (addGuest.children.length > 10) {
            alert("You cannot exceed 10 guests.")
        }
    };
});