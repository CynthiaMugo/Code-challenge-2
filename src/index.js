document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("guest-form");
    const input = document.getElementById("guest-name"); //Name of the guest input field
    const submit = document.getElementById("add-guest"); //Button to add the guest
        submit.addEventListener("click", (event) => {
            event.preventDefault();

            const guestName = input.value.trim(); // Get the trimmed value of the input field
            if (guestName === "") {
                alert("Please enter a guest name.");
                return;
            }
            handleClick(guestName);

            form.reset();
    })
    const handleClick = (guestName) => {
        const addGuest = document.getElementById("guest-list"); // The list where guests will be added
        const parItem = document.createElement("p");
        parItem.textContent = guestName;
        addGuest.appendChild(parItem);
    };
});