import React, { useEffect, useRef, useState } from 'react';
import { pokemonAPI } from '../api/pokemonAPI';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemon.interfaces';

export const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );

  const nextPageURL = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    setIsLoading(true);

    const res = await pokemonAPI.get<PokemonPaginatedResponse>(
      nextPageURL.current
    );

    nextPageURL.current = res.data.next;

    mapPokemonList(res.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    // pokemonList.forEach(poke => console.log(poke.url))

    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      // construccion en base a la interface
      const urlParts = url.split('/');

      const id = urlParts[urlParts.length - 2];

      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        name,
        picture,
      };
    });

    setSimplePokemonList([...simplePokemonList, ...newPokemonList]); // acc los anteriores mas los nuevos

    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
    isLoading,
  };
};
