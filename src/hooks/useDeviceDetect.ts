import { useEffect, useState } from "react";

type Devices = "mobile" | "tablet" | "desktop" | "desktop-xl" | "mobile-lg";

export const QUERY: Record<Devices, string> = {
  mobile: "(max-width: 575.99px)",
  "mobile-lg": "(max-width: 767.98px)",
  tablet: "(min-width: 768px) and (max-width: 1199.98px)",
  desktop: "(min-width: 1200px)",
  "desktop-xl": "(min-width: 1200px)",
} as const;

const useDeviceDetect = (device: Devices) => {
  const [match, setMatch] = useState(device.includes("desktop"));

  useEffect(() => {
    const media = window.matchMedia(QUERY[device]);
    setMatch(media.matches);
    const handleChange = () => setMatch(media.matches);
    if ("addEventListener" in media) {
      media.addEventListener("change", handleChange);
      return () => {
        media.removeEventListener("change", handleChange);
      };
      // eslint-disable-next-line no-else-return
    } else {
      // deprecated
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      media.addListener(handleChange);
      return () => {
        // deprecated
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        media.removeListener(handleChange);
      };
    }
  }, [device]);

  return match;
};

export default useDeviceDetect;
