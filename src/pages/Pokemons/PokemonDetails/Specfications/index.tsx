import { useState, ReactElement, FC } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Stats from "./Stats";
import Abilities from "./Abilities";
import Moves from "./Moves";

interface TabPanelProps {
  children: ReactElement;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      py={1}
      id={`tabpanel-${index}`}
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}

const Specfications: FC<SpecficationsProps> = ({ stats, abilities, moves }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box mb={4}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Pokemon specfications"
        >
          <Tab label="Stats" color="red" />
          <Tab label="Moves" />
          <Tab label="Abilities" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stats stats={stats} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Moves moves={moves} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Abilities abilities={abilities} />
      </TabPanel>
    </Box>
  );
};

interface SpecficationsProps {
  stats: Record<string, any>[];
  abilities: Record<string, any>[];
  moves: Record<string, any>[];
}

export default Specfications;
