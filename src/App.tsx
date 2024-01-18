import "./App.css";
import GridClocks from "./GridClocks";

function App() {

  // const timezones = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezones = ['Australia/Sydney', 'America/Sao_Paulo', 'America/New_York', 'Europe/London' ];
  // const timezones = Intl.supportedValuesOf('timeZone');

  return (
    <>
      <div>
        <h1>The World Clock</h1>
        <div className="card">
          <GridClocks size={300} timezones={timezones} />
        </div>
        <div className="read-the-docs">{import.meta.env.VITE_APP_VERSION}</div>
      </div>
    </>
  );
}

export default App;
