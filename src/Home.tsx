import Autocomplete from "@mui/material/Autocomplete";
import GridClocks from "./GridClocks";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Flag from "./Flag";

function Home() {
  const timezones = [
    "Australia/Sydney",
    "America/Sao_Paulo",
    "America/New_York",
    "Europe/London",
    "Europe/Madrid",
    "Europe/Dublin",
  ];

  const [selectedOptions, setSelectedOptions] = useState(timezones);

  const timezonesList = Intl.supportedValuesOf("timeZone");

  return (
    <div>
      <h1>The World Clock</h1>
      <div className="card">
        <Autocomplete
          multiple
          options={timezonesList}
          getOptionLabel={(option) =>
            Flag.getFlagTimeZone(option) + " " + option
          }
          disableCloseOnSelect
          onChange={(_, newValue) => setSelectedOptions(newValue)}
          value={selectedOptions}
          isOptionEqualToValue={(option, value) => option === value}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox checked={selected} />
              {Flag.getFlagTimeZone(option)} {option}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Selected timezone" />
          )}
        />
        <GridClocks size={300} timezones={selectedOptions} />
      </div>
      <div className="read-the-docs">
        <a
          target="_blank"
          href={`https://github.com/humbertodias/react-timezone-clocks/commit/${
            import.meta.env.VITE_APP_VERSION
          }`}
        >
          {import.meta.env.VITE_APP_VERSION}
        </a>
      </div>
    </div>
  );
}

export default Home;
