import MainNavBar from "../components/main-nav-bar/main-nav-bar";
import { useState } from "react";
import styles from "../components/card/card.module.css";
import Main from "../components/home/main";
import Pokeinfo from "../components/home/Pokeinfo";
import style from "../components/home/style.module.css";

function HomePage({}) {
  const [pokemonName, setPokemonName] = useState("");
  const [choosePokemon, setChoosePokemon] = useState(false);
  const [pokemon, setPokemon] = useState();
  const searchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setChoosePokemon(true);
      });
  };
  return (
    <div>
      <MainNavBar />
      <ul>
        <li className={styles.li}>
          <div className={styles.main}>
            <input
              type="text"
              className={styles.input}
              onChange={(event) => {
                setPokemonName(event.target.value);
              }}
            />
            <button className={styles.button} onClick={searchPokemon}>
              Search Pokemon
            </button>
          </div>
        </li>
      </ul>
      <Main />

      <div>
        {choosePokemon && (
          <>
            <div className={style.rightcontent}>
              <Pokeinfo data={pokemon} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default HomePage;
