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


        //limit the number of guests to 10
        if (addGuest.children.length > 10) {
            alert("You cannot exceed 10 guests.")
        }

        //add RSVP toggle feature
        const rsvpToggle = document.createElement("button");
        // Initial text for the RSVP button
        rsvpToggle.textContent = "Not Attending";
        parItem.appendChild(rsvpToggle);
        // style the RSVP button
        rsvpToggle.style.backgroundColor = "gray";
        rsvpToggle.style.color = "white";
        rsvpToggle.style.border = "none";
        rsvpToggle.style.padding = "5px 5px";
        rsvpToggle.style.borderRadius = "5px";
        // Toggle RSVP status on button click conditionally
        rsvpToggle.addEventListener("click", () => {
            if (rsvpToggle.textContent === "Not Attending") {
                rsvpToggle.textContent = "Attending";
                rsvpToggle.style.backgroundColor = "green";
            } else {
                rsvpToggle.textContent = "Not Attending";
                rsvpToggle.style.backgroundColor = "gray";
            }
        });

        //remove a guest from the list using a delete button.
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        parItem.appendChild(deleteBtn);
        // style the delete button
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.borderRadius = "5px";

        // Remove the paragraph element from the list
        deleteBtn.addEventListener("click", () => {
            addGuest.removeChild(parItem); 
        });

    };
});