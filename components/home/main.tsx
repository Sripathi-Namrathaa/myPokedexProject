import React from "react";
import Card from "./card";
import Pokeinfo from "./pokeinfo";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../home/style.module.scss";
import { getAllPokemon, getPokemon } from "../../services/pokemon";
const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  useEffect(() => {
    async function pokeFun() {
      setLoading(true);
      const res = await getAllPokemon(url);
      setNextUrl(res.next);
      setPrevUrl(res.previous);
      getPokemon1(res.results);
      setLoading(false);
    }
    pokeFun();
  }, [url]);
  const getPokemon1 = async (res) => {
    let _pokemonData = await Promise.all(
      res.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokeData(_pokemonData);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftcontent}>
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className={styles.btngroup}>
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className={styles.rightcontent}>
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
    </>
  );
};
export default Main;
