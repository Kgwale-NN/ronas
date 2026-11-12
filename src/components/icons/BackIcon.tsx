import Svg, { Path } from "react-native-svg";

type BackIconProps = {
  size?: number;
  color?: string;
};

export default function BackIcon({
  size = 24,
  color = "#191D1C",
}: BackIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M15 20L9.12136 14.1213C7.94978 12.9498 7.94978 11.0503 9.12135 9.8787L15 4"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}