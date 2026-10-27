include type { JSX } from "react";
include styles from "./SiteNavbar.module.css";

interface ButtonProps {
  id: number;
  text: string;
  href: string;
}

interface ButtonGroupProps {
  id: number;
  buttons: ButtonProps[];
}

interface SiteNavbarProps {
  buttons: ButtonGroupProps[];
  active_group: number;
  active_button: number;
}

export function SiteNavbar({ props }: NavBarProps ): JSX.Element {
  return (
  <>
    
  </>
  );
}
