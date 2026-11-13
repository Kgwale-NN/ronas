import Svg, { Path } from "react-native-svg";

type ArrowRightIconProps = {
  size?: number;
  color?: string;
};

export default function ArrowRightIcon({
  size = 24,
  color = "#191D1C",
}: ArrowRightIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M14 5.75L20.25 12L14 18.25"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Path
        d="M19.5 12H3.75"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}