import Image from "next/image";

export type IconName = "calendar" | "clock" | "google" | "project";

type Props = {
  name: IconName;
  width: number;
  height: number;
  className?: string;
};

export const Icon: React.FC<Props> = ({ name, width, height, className }) => {
  return (
    <Image
      src={`/${name}.svg`}
      width={width}
      height={height}
      alt={name}
      className={className}
    />
  );
};
