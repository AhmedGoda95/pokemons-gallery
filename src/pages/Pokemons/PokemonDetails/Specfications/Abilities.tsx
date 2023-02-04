import { FC } from "react";

import SpecficationItem from "./SpecficationItem";

const Abilities: FC<AbilitiesProps> = ({ abilities }) => {
  return (
    <>
      {abilities.map((ability, index: number) => {
        return (
          <SpecficationItem
            value={ability.slot}
            title={ability.ability.name}
            key={index}
            paddingBottom={index === abilities.length - 1 ? 0 : 3}
          />
        );
      })}
    </>
  );
};

interface AbilitiesProps {
  abilities: Record<string, any>[];
}

export default Abilities;
