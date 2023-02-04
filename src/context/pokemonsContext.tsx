import {
  createContext,
  FC,
  useState,
  ReactElement,
  useEffect,
  useContext,
} from "react";
import axios from "axios";

import { API_ENDPOINT } from "../config";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IPokemonsContext {
  loading: boolean;
  pokemons: Record<string, any>[];
  error: string;
  nextPage: string | null;
  prevPage: string | null;
  handlePagination: (...args: any[]) => any;
}
const PokemonsContext = createContext<IPokemonsContext>({
  loading: true,
  pokemons: [],
  error: "",
  nextPage: null,
  prevPage: null,
  handlePagination: () => {},
});

export const PokemonsProvider: FC<{ children: ReactElement[] }> = ({
  children,
}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [nextPage, setNextPage] = useState<string | null>(
    `offset=${searchParams.get("offset") ?? 0}&limit=${
      searchParams.get("limit") ?? 500
    }`
  );
  const [prevPage, setPrevPage] = useState<string | null>(
    `offset=${searchParams.get("offset") ?? 0}&limit=${
      searchParams.get("limit") ?? 500
    }`
  );

  const handlePagination = (isNext = true) => {
    fetchPokemons(isNext);
  };

  const fetchPokemons = async (isNext = true) => {
    setLoading(true);
    axios
      .get(`${API_ENDPOINT}?${isNext ? nextPage : prevPage}`)
      .then((response) => {
        if (response.status === 200) {
          const nextParams = response.data.next;
          const previousParams = response.data.previous;

          navigate({
            pathname: "/",
            search: isNext && nextParams ? `?${nextPage}` : `?${prevPage}`,
          });

          if (nextParams) {
            setNextPage(nextParams.replace(`${API_ENDPOINT}?`, ""));
          } else {
            setNextPage(null);
          }

          if (previousParams) {
            setPrevPage(previousParams.replace(`${API_ENDPOINT}?`, ""));
          } else {
            setPrevPage(null);
          }

          setPokemons(response.data.results);
        }
        setError("");
        setLoading(false);
      })
      .catch((ex: any) => {
        setError(ex.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        loading,
        pokemons,
        error,
        nextPage,
        prevPage,
        handlePagination,
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
