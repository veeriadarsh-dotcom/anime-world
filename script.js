// SCROLL TO ANIME

function scrollToAnime() {

    document.getElementById("trending").scrollIntoView({
        behavior: "smooth"
    });

}


// WATCH BUTTON

function showMessage() {

    alert("🎬 Watch feature coming soon!");

}


// FAVORITE BUTTON

function favorite(button) {

    button.classList.toggle("active");

    if (button.classList.contains("active")) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}


// SEARCH

function searchAnime() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".anime-card");

    cards.forEach(function(card) {

        let name = card
            .getAttribute("data-name");

        if (!name) {
            name = card.querySelector("h3").innerText;
        }

        if (name.toLowerCase().includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// SEARCH USING ENTER KEY

document
    .getElementById("searchInput")
    .addEventListener("keyup", function(event) {

        if (event.key === "Enter") {

            searchAnime();

        }

    });


// GENRE BUTTON

function filterGenre(genre) {

    alert(
        "You selected the " +
        genre +
        " genre! 🎭"
    );

}