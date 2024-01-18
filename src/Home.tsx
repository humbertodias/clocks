import GridClocks from "./GridClocks";

function Home() {
  // const timezones = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezones = [
    "Australia/Sydney",
    "America/Sao_Paulo",
    "America/New_York",
    "Europe/London",
    "Europe/Madrid",
    "Europe/Dublin",
  ];
  // const timezonesList = Intl.supportedValuesOf('timeZone');
  // console.log(timezonesList);
  
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

export default Home;