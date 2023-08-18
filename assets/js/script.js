function BuscarPokemons() {
    const btn = document.getElementById("ver-mais");
    let valorFinal = 0;

    btn.addEventListener("click", function () {
        const valor = 6;
        valorFinal += valor;
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${valorFinal}&offset=0`;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonBody) {
                const ul = document.getElementById("lista-pokemons");
                ul.innerHTML = "";

            for (const pokemon of jsonBody.results) {
                const divDados = document.createElement("div")
                const div = document.createElement("div")
                const li = document.createElement("li");
                const imagem = document.createElement("img");
                const habilidades1 = document.createElement("p");
                imagem.classList.add("personagem")
                div.classList.add("armazenamento")
                divDados.classList.add("armazenamentoDados")
                const urlPokemon = pokemon.url
                li.innerHTML = pokemon.name

                fetch(urlPokemon).then(
                    function (response2) {
                        return response2.json()
                    }
                )

                    .then(function (jsonBodyUnitario) {
                        console.log(jsonBodyUnitario)
                        habilidades1.innerHTML = jsonBodyUnitario.abilities[0].ability.name
                        imagem.src = jsonBodyUnitario.sprites.other.dream_world.front_default
                        const background = jsonBodyUnitario.types[0].type.name
                        div.classList.add(background)
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
                    })
                console.log(urlPokemon)
                divDados.appendChild(li)
                divDados.appendChild(habilidades1)
                div.appendChild(divDados)
                div.appendChild(imagem)
                ul.appendChild(div)



            }


        }


        )
    });

    // Chamada inicial para carregar os primeiros 6 pokémons
    btn.click();
}


BuscarPokemons()