import "./App.css";
import AnalogClock from "./AnalogClock";

function Home() {
  // const timezones = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezones = [
    "Australia/Sydney",
    "America/Sao_Paulo",
    "America/New_York",
    "Europe/London",
  ];
  // const timezones = Intl.supportedValuesOf('timeZone');

  return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}> 
          {timezones.map((timezone, index) => (
            <AnalogClock key={index} timezone={timezone} size={300} />
            ))}
      </div>
  );
}

export default Home;
