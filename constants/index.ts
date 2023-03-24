import { ReactNode } from "react";
import { StaticImageData } from "../global";

export interface CardProps {
  title: string;
  href: string;
  thumbnail: string;
  children: ReactNode;
}
export interface CardItemProps {
  title: string;
  id?: string;
  thumbnail: StaticImageData;
  children: ReactNode;
}

export interface TitleProps {
  children: ReactNode;
}
export interface WorkImageProps {
  src: string;
  alt: string;
}
export interface MetaProps {
  children: ReactNode;
}

export interface ArticleLayoutProps {
  children?: ReactNode;
  title?: string;
}
export interface SectionProps {
  children: ReactNode;
  delay?: string;
}
