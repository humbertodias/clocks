import React from "react";
import AnalogClock from "./AnalogClock"; // Import your AnalogClock component

interface GridClocksProps {
  size?: number;
  timezones: string[];
}

const GridClocks: React.FC<GridClocksProps> = ({ size = 200, timezones }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {timezones.map((timezone, index) => (
        <AnalogClock key={index} timezone={timezone} size={size} />
      ))}
    </div>
  );
};

export default GridClocks;
