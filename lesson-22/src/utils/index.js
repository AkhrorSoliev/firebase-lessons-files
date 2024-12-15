// diceBear
import { createAvatar } from "@dicebear/core";
import { shapes } from "@dicebear/collection";

export function formatDate(timestamp) {
  // Convert seconds to milliseconds (ignoring nanoseconds for simplicity)
  const date = new Date(timestamp.seconds * 1000);

  // Format the date to the user's local time
  const formattedDate = date.toLocaleString("en-GB", {
    timeZoneName: "short", // Optional: Include time zone abbreviation
    hour12: false, // 24-hour format
  });

  // Split date and time for custom formatting
  const [datePart, timePart] = formattedDate.split(", ");

  // Reformat to desired output: DD.MM.YYYY, HH:mm:ss
  const [day, month, year] = datePart.split("/");
  return `${day}.${month}.${year}, ${timePart}`;
}

export function generateSvgBackground() {
  const randomSeed = Math.random().toString(36).substring(2, 10);
  console.log(randomSeed);
  const avatar = createAvatar(shapes, {
    seed: randomSeed,
  });
  const svg = avatar.toString();

  const svgBackground = `url('data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    svg
  )}')`;

  return svgBackground;
}
