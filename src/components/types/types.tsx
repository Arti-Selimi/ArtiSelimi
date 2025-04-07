import { StaticImageData } from "next/image";

export type Tile = {
  parentRef?: React.RefObject<HTMLDivElement> | null;
  key: string;
  value: object;
  name: string;
  imgSrc: string | StaticImageData;
  frameworks: string;
  link: string;
  deploymentUrl: string;
};

export type Module = {
  link: string;
  open: boolean;
  onClose: () => void;
};
