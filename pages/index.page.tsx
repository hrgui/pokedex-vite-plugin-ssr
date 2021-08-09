import React from "react";

export { Page };

function Page({ pokemon }) {
  return (
    <>
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.id} />
      <h1>
        {pokemon.name} #{pokemon.id}
      </h1>
      <a href={`/${+pokemon.id - 1}`}>prev</a>
      {"    "}
      <a href={`/${+pokemon.id + 1}`}>next</a>
    </>
  );
}
