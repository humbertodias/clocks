import "./App.css";
import GridClocks from "./GridClocks";

function App() {
  // const timezones = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezones = [
    "Australia/Sydney",
    "America/Sao_Paulo",
    "America/New_York",
    "Europe/London",
  ];
  // const timezones = Intl.supportedValuesOf('timeZone');

  return (
      <div>
        <h1>The World Clock</h1>
        <div className="card">
          <GridClocks size={300} timezones={timezones} />
        </div>
        <div className="read-the-docs">
          <a target="_blank" href={`https://github.com/humbertodias/react-timezone-clocks/commit/${import.meta.env.VITE_APP_VERSION}`}>{import.meta.env.VITE_APP_VERSION}</a>
        </div>
      </div>
  );
}

export default App;
