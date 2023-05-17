import { useEffect, useState } from 'react';
import { PokemonFull } from '../interfaces/pokemon.interfaces';
import { pokemonAPI } from '../api/pokemonAPI';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);

  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull); // valor iniciar para que devuelva undefined en vez de error

  const loadPokemon = async () => {
    const res = await pokemonAPI.get<PokemonFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    setPokemon(res.data);

    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
