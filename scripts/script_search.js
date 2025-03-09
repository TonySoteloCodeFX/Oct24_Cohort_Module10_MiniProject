document.addEventListener("DOMContentLoaded", function () {
    async function fetchPokemonData(pokemonName) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            if (!response.ok) throw new Error("Pokemon not found");
            return await response.json();
        } catch (error) {
            console.error(error);
            alert("Pokémon not found! Please enter a valid name.");
            return null;
        }
    }

    document.querySelector(".search-button").addEventListener("click", async function () {
        let pokemonName = document.getElementById("pokemonName").value.trim();
        if (!pokemonName) {
            alert("Please enter a Pokémon name!");
            return;
        }

        const pokemonData = await fetchPokemonData(pokemonName);
        if (!pokemonData) return;

        const pokemonImageContainer = document.getElementById("newPokemon-image");
        const pokemonDetails = document.getElementById("pokemon-info");

        pokemonImageContainer.innerHTML = "";
    
        const pokemonImage = document.createElement("img");
        pokemonImage.src = pokemonData.sprites.front_default;
        pokemonImage.alt = pokemonData.name;
        pokemonImage.style.width = "200px";
        pokemonImage.style.height = "200px";
        pokemonImage.style.display = "block"; 
        pokemonImage.style.margin = "auto";

        pokemonDetails.innerHTML = `
        <h3 class="ability">ABILITIES</h3>
        <ul class="ability-list">
            ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>`;

        pokemonImageContainer.appendChild(pokemonImage);
    });
});