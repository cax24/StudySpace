const studySpaces = [
    {
        name: "HeadSpace Room",
        location: "Library Floor 1",
        availability: "Available",
        attendees: "Solo",
        busy: "Not too busy",
        sound: "Quiet",
        light: "Natural light",
        image: "../assets/library.jpg"
    },
    {
        name: "Café UG",
        location: "Cafeteria",
        availability: "Unavailable",
        attendees: "Group",
        busy: "Very busy",
        sound: "Loud",
        light: "Bright",
        image: "../assets/cafe.jpg"
    }
];

const container = document.getElementById("spaceContainer");

function displaySpaces() {
    container.innerHTML = "";

    studySpaces.forEach(space => {
        const card = document.createElement("div");

        card.classList.add("space-card");

        card.innerHTML = `
            <div class="card-header">
                <div>
                    <div class="space-name">${space.name}</div>
                    <p>${space.location}</p>
                </div>

                <span class="availability">
                    ${space.availability}
                </span>
            </div>

            <img src="${space.image}" class="space-image">

            <div class="space-tags">
                <span class="tag">${space.attendees}</span>
                <span class="tag">${space.busy}</span>
                <span class="tag">${space.sound}</span>
                <span class="tag">${space.light}</span>
            </div>
            
        `;

        container.appendChild(card);
    });
}

displaySpaces();