import { getCountryForTimezone } from "countries-and-timezones";

const getCountryCode = (timezone: string) => {
  const country = getCountryForTimezone(timezone);
  return country ? country.id : "";
};

const getFlagTimeZone = (timezone: string) => {
    const countryCode = getCountryCode(timezone);
    return getCountryFlagEmoji(countryCode);
}

const getCountryFlagEmoji = (countryCode: string) => {
  if (!countryCode) {
    return "🌐";
  }

  const base = 127397; // Unicode code point for regional indicator symbol letter A

  const countryLetters = countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(base + char.charCodeAt(0)));

  return countryLetters.join("");
};

export default {
  getCountryCode,
  getCountryFlagEmoji,
  getFlagTimeZone,
};
