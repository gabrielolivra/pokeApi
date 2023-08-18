function BuscarPokemons() {
    const nomePokemon = document.getElementById("inputPokemon").value.toLowerCase();
    
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
    
    fetch(url)
        .then(
            function (response) {
                return response.json();
            }
        )

        .then(function (jsonBody) {
            
            const container = document.getElementById("lista-pokemons");
            container.classList.add("container")
            container.innerHTML = "";
            const img = document.createElement("img")
            const p_nome = document.createElement("p")
            const p_habilidade = document.createElement("p")
            const nomePokemon = jsonBody.name
            const imagemPokemon = jsonBody.sprites.other.dream_world.front_default
            const habilidadePokemon = jsonBody.abilities[0].ability.name
            p_nome.innerHTML = nomePokemon
            img.src = imagemPokemon
            p_habilidade.innerHTML = habilidadePokemon 
            const background = jsonBody.types[0].type.name
            container.classList.add(background)
            const backgroundAlterado = document.getElementsByClassName(background);
            switch (background) {
                case "bug":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'green';
                    }
                    break;
                case "dark":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'darkred';
                    }
                    break;
                case "dragon":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'purple';
                    }
                    break;
                case "electric":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'yellow';
                    }
                    break;
                case "fairy":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'pink';
                    }
                    break;
                case "fighting":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'brown';
                    }
                    break;
                case "fire":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'orange';
                    }
                    break;
                case "flying":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'skyblue';
                    }
                    break;
                case "ghost":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'black';
                    }
                    break;
                case "grass":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'green';
                    }
                    break;
                case "ground":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'brown';
                    }
                    break;
                case "ice":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'lightblue';
                    }
                    break;
                case "normal":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'white';
                    }
                    break;
                case "poison":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'purple';
                    }
                    break;
                case "psychic":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'magenta';
                    }
                    break;
                case "rock":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'gray';
                    }
                    break;
                case "steel":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'silver';
                    }
                    break;
                case "water":
                    for (const elemento of backgroundAlterado) {
                        elemento.style.backgroundColor = 'blue';
                    }
                    break;
                default:
                    console.log("ola");
                    break;
            }


            container.appendChild(p_nome)
            container.appendChild(img)
            container.appendChild(p_habilidade)
            console.log(imagemPokemon)
            
                
            
        }
        )
    }