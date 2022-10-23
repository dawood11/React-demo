import { ReactNode } from "react";

export interface PrimaryButtonPropType {
  disableBtn: boolean;
  text: string;
  onClick: () => void;
  children?: ReactNode;
};