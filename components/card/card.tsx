import styles from "../card/card.module.css";

function Card({ pokemon }) {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__name}>{pokemon.name}</div>
      <div className={styles.Card__img}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt=""
        />
      </div>
      <div className={styles.Card__types}>
        {pokemon.types.map((type) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className={styles.Card__type}>{type.type.name}</div>
          );
        })}
      </div>
      <div className={styles.Card__info}>
        <div className={styles.Card__data}>
          <p className={styles.title}>Weight</p>
          <p className={styles.description}>{pokemon.weight}</p>
        </div>
        <div className={styles.Card__data}>
          <p className={styles.title}>Height</p>
          <p className={styles.description}>{pokemon.height}</p>
        </div>
        <div className={styles.Card__data}>
          <p className={styles.title}>Ability</p>
          <p className={styles.description}>
            {pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
