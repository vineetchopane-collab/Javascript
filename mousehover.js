// Mouse Hover Event

// Create heading
let heading = document.createElement("h2");

heading.textContent = "Move your mouse over me!";
heading.style.color = "black";
heading.style.fontSize = "24px";

// Add heading to webpage
document.body.appendChild(heading);

// Mouse Over Event
heading.addEventListener("mouseover", function () {
    heading.style.color = "red";
    heading.style.fontSize = "30px";
    heading.textContent = "Mouse is over me!";
});

// Mouse Out Event
heading.addEventListener("mouseout", function () {
    heading.style.color = "black";
    heading.style.fontSize = "24px";
    heading.textContent = "Move your mouse over me!";
});