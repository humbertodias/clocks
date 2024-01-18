import React, { useEffect, useState } from "react";
import { getCountryForTimezone } from 'countries-and-timezones';

interface AnalogClockProps {
  size?: number;
  timezone?: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({
  size = 200,
  timezone = "America/New_York",
}) => {
  const [time, setTime] = useState(new Date());
  const [countryFlag, setCountryFlag] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    updateCountryFlag(); // Initial update
    return () => clearInterval(intervalId);
  }, []);

  const isNight = () => {
    const currentHour = time.toLocaleString("en-US", {
      timeZone: timezone,
      hour: "numeric",
      hour12: false,
    });
    return parseInt(currentHour) >= 18 || parseInt(currentHour) < 6; // Assuming night from 6 PM to 6 AM
  };

  const getHandCoordinates = (angle: number, length: number) => {
    const x = size / 2 + length * Math.sin(angle);
    const y = size / 2 - length * Math.cos(angle);
    return { x, y };
  };

  const renderClockHands = () => {
    let dateTimeZoneStr = time.toLocaleString("en-US", { timeZone: timezone });
    let dateTimeZone = new Date(dateTimeZoneStr);

    const hours = dateTimeZone.getHours() % 12;
    const minutes = dateTimeZone.getMinutes();
    const seconds = dateTimeZone.getSeconds();

    const hourAngle = ((hours + minutes / 60) * 30 * Math.PI) / 180;
    const minuteAngle = (minutes * 6 * Math.PI) / 180;
    const secondAngle = (seconds * 6 * Math.PI) / 180;

    const hourHandLength = size / 3.5;
    const minuteHandLength = size / 2.5;
    const secondHandLength = size / 2.2;

    const hourHandEnd = getHandCoordinates(hourAngle, hourHandLength);
    const minuteHandEnd = getHandCoordinates(minuteAngle, minuteHandLength);
    const secondHandEnd = getHandCoordinates(secondAngle, secondHandLength);

    return (
      <>
        {/* Hour hand */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={hourHandEnd.x}
          y2={hourHandEnd.y}
          strokeWidth={8}
          strokeLinecap="round"
          stroke="#333"
        />

        {/* Minute hand */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={minuteHandEnd.x}
          y2={minuteHandEnd.y}
          strokeWidth={6}
          strokeLinecap="round"
          stroke="#333"
        />

        {/* Second hand */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={secondHandEnd.x}
          y2={secondHandEnd.y}
          strokeWidth={2}
          strokeLinecap="round"
          stroke="#f00"
        />

        {/* Line indicating the current angle */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={hourHandEnd.x}
          y2={hourHandEnd.y}
          strokeWidth={2}
          stroke="#00f"
          opacity={0.5}
        />
      </>
    );
  };

  const renderHourNumbers = () => {
    const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

    return numbers.map((hour) => {
      const angle = (((hour - 4) * 30 + 120) * Math.PI) / 180;
      const position = getHandCoordinates(angle, size / 2 - 40);

      return (
        <text
          key={hour}
          x={position.x}
          y={position.y}
          fontSize="16"
          fontFamily="Arial, sans-serif"
          textAnchor="middle"
          dy="5"
          fill={isNight() ? "#fff" : "#333"}
        >
          {hour}
        </text>
      );
    });
  };

  const updateCountryFlag = () => {
    const countryCode = getCountryCode(timezone);
    setCountryFlag(getCountryFlagEmoji(countryCode));
  };

  const getCountryCode = (timezone: string) => {
    const country = getCountryForTimezone(timezone);
    return country ? country.id : '';
  };


  function getCountryFlagEmoji(countryCode: string) {
    if (!countryCode) {
      return "🌐";
    }

    const base = 127397; // Unicode code point for regional indicator symbol letter A

    const countryLetters = countryCode
      .toUpperCase()
      .split("")
      .map((char) => String.fromCodePoint(base + char.charCodeAt(0)));

    return countryLetters.join("");
  }

  return (
    <div>
      <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect x="0" y="0" width={size} height={size} fill="#fff" />

        {/* Clock face */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 5}
          fill={isNight() ? "#000" : "#fff"}
          stroke="#333"
          strokeWidth={2}
        />

        {/* Hour numbers */}
        {renderHourNumbers()}

        {/* Clock hands */}
        {renderClockHands()}

        {/* Center point */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={4}
          fill={isNight() ? "#fff" : "#333"}
        />
      </svg>
      <div style={{ fontSize: "24px", marginTop: "10px" }}>{countryFlag}</div>
      <div>
        {timezone}
      </div>
      <div>
      {time.toLocaleString("en-US", { timeZone: timezone })}
      </div>
    </div>
  );
};

export default AnalogClock;
