import React from "react";
import styles from "../home/style.module.css";
const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className={styles.card}
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2>{item.id}</h2>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  alt=""
                />
                <h2>{item.name}</h2>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
export default Card;
