import { FC } from "react";

import SpecficationItem from "./SpecficationItem";

const Stats: FC<StatsProps> = ({ stats }) => {
  return (
    <>
      {stats.map((stat, index: number) => {
        return (
          <SpecficationItem
            value={stat.base_stat}
            title={stat.stat.name}
            key={index}
            paddingBottom={index === stats.length - 1 ? 0 : 3}
          />
        );
      })}
    </>
  );
};

interface StatsProps {
  stats: Record<string, any>[];
}

export default Stats;
