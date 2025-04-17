import { StaticImageData } from "next/image";
import { ComponentType } from "react";

export type Tile = {
  parentRef?: React.RefObject<HTMLDivElement | null> ;
  value: object;
  name: string;
  imgSrc: string | StaticImageData;
  frameworks: ComponentType[];
  link: string;
  deploymentUrl: string;
};

export type Module = {
  link: string;
  open: boolean;
  onClose: () => void;
};

export type Card = {
  name: string;
  frameworks: ComponentType[];
  imgSrc: string | StaticImageData;
  link: string;
  className?: string;
  deploymentUrl: string;
  description: string;
}