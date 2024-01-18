import React from "react";
import AnalogClock from "./AnalogClock"; // Import your AnalogClock component
import Flag from "./Flag";

interface GridClocksProps {
  size?: number;
  timezones: string[];
}

const GridClocks: React.FC<GridClocksProps> = ({ size = 200, timezones }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {timezones.map((timezone, index) => (
        <AnalogClock key={index} timezone={timezone} size={size} flag={Flag.getFlagTimeZone(timezone)}/>
      ))}
    </div>
  );
};

export default GridClocks;
