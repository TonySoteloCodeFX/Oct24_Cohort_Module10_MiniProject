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

        
        pokemonImageContainer.innerHTML = "";

    
        const pokemonImage = document.createElement("img");
        pokemonImage.src = pokemonData.sprites.front_default;
        pokemonImage.alt = pokemonData.name;
        pokemonImage.style.width = "200px";
        pokemonImage.style.height = "200px";
        pokemonImage.style.display = "block"; 

        pokemonImageContainer.appendChild(pokemonImage);

        console.log(`Pokemon: ${pokemonData.name}`);
        console.table(pokemonData.abilities.map(ability => ability.ability.name));
    });
});
