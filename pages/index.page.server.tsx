export async function addPageContext({ routeParams }) {
  if (!routeParams.id) {
    return {};
  }

  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
  const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${routeParams.id}`);
  const pokemon = await pokemonRes.json();

  return { pageProps: { pokemon } };
}
