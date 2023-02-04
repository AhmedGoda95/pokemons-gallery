import Chip from "@mui/material/Chip";

import { FC } from "react";

const Moves: FC<MovesProps> = ({ moves }) => {
  return (
    <>
      {moves.length
        ? moves.map((move, index) => {
            return (
              <Chip
                key={index}
                sx={(theme) => ({
                  marginRight: theme.spacing(1),
                  marginBottom: theme.spacing(1),
                  backgroundColor: "#00D700",
                  color: theme.palette.grey[900],
                  fontWeight: 500,
                  fontSize: 15,
                })}
                label={move.move.name}
              />
            );
          })
        : null}
    </>
  );
};

interface MovesProps {
  moves: Record<string, any>[];
}

export default Moves;
