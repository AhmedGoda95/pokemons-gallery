import {
  createContext,
  FC,
  useState,
  ReactElement,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import { API_ENDPOINT } from "../config";

interface IPokemons {
  name: string;
  url: string;
}

interface IPokemonsContext {
  loading: boolean;
  pokemons: IPokemons[];
  error: string;
  disabledNextBtn: boolean;
  disabledPrevBtn: boolean;
  handlePagination: (...args: any[]) => any;
  searchPokemons: (...args: any[]) => any;
}

const PokemonsContext = createContext<IPokemonsContext>({
  loading: true,
  pokemons: [],
  error: "",
  disabledNextBtn: false,
  disabledPrevBtn: false,
  handlePagination: () => {},
  searchPokemons: () => {},
});

export const PokemonsProvider: FC<{ children: ReactElement[] }> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [pokemonsDefaultValues, setPokemonsDefaultValues] = useState<
    IPokemons[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [disabledNextBtn, setDisabledNextBtn] = useState(false);
  const [disabledPrevBtn, setDisabledPrevBtn] = useState(false);
  const [progress, setProgress] = useState(0);

  const [nextUrl, setNextUrl] = useState<string>("");
  const [prevUrl, setPrevUrl] = useState<string>("");

  const handlePagination = (isNext = true) => {
    fetchPokemons(isNext ? nextUrl : prevUrl);
  };

  /**
   * api i used dosen't contains content-length which represents total length of data
   */
  // const options = {
  //   onDownloadProgress: (e: any) => {
  //     setProgress(Math.floor((e.loaded / e.total) * 100));
  //   },
  // };

  const fetchPokemons = useCallback(
    (api = `${API_ENDPOINT}?${searchParams.toString()}`) => {
      setLoading(true);
      axios
        .get(api) // here add options as a second argument
        .then((response) => {
          if (response.status === 200) {
            setNextUrl(response.data.next);
            setPrevUrl(response.data.previous);

            setDisabledNextBtn(response.data.next === null);
            setDisabledPrevBtn(response.data.previous === null);

            const searchParams = api.split("?");
            setSearchParams(searchParams[1]);

            setPokemons(response.data.results);
            setPokemonsDefaultValues(response.data.results);
          }
          setError("");
          setLoading(false);
        })
        .catch((ex: any) => {
          setError(ex.message);
          setLoading(false);
        });
    },
    []
  );

  const searchPokemons = (name: string) => {
    const clonedPokemons = structuredClone(pokemonsDefaultValues);
    setPokemons(() =>
      clonedPokemons.filter((pokemon: IPokemons) => pokemon.name.includes(name))
    );
  };

  useEffect(() => {
    if (!searchParams.get("offset") && !searchParams.get("limit")) {
      searchParams.set("offset", "0");
      searchParams.set("limit", "6");
      setSearchParams(searchParams);
    }
    fetchPokemons();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        loading,
        pokemons,
        error,
        disabledNextBtn,
        disabledPrevBtn,
        handlePagination,
        searchPokemons,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsContext;

export const usePokemons = () => {
  return useContext(PokemonsContext);
};
