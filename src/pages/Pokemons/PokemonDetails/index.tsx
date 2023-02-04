import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import CustomButton from "../../../components/CustomButton";
import ErrorMessage from "../../../components/ErrorMessage";
import Header from "./Header";
import Specfications from "./Specfications";
import CustomCard from "../../../components/CustomCard";
import { API_ENDPOINT } from "../../../config";
import Loader from "../../../components/Loader";

const PokemonDetails = () => {
  const navigate = useNavigate();
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const [pokemonDetails, setPokemonDetails] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      axios
        .get(`${API_ENDPOINT}/${pokemonId}`)
        .then((response) => {
          setLoading(false);
          setPokemonDetails(response.data);
          setError("");
        })
        .catch((ex) => {
          setError(ex.message);
          setLoading(false);
        });
    })();
  }, []);

  return (
    <>
      <CustomButton
        handleClick={() => navigate(-1)}
        title="Back"
        Icon={<ArrowBackIcon />}
      />
      <CustomCard>
        <Loader loading={loading}>
          <>
            {error ? (
              <ErrorMessage message={error} />
            ) : pokemonDetails ? (
              <>
                <Header
                  name={pokemonDetails.name}
                  types={pokemonDetails.types}
                  photoUrl={pokemonDetails.sprites.front_default}
                />
                <Specfications
                  stats={pokemonDetails.stats}
                  abilities={pokemonDetails.abilities}
                  moves={pokemonDetails.moves}
                />
              </>
            ) : (
              "Erro"
            )}
          </>
        </Loader>
      </CustomCard>
    </>
  );
};

export default PokemonDetails;
