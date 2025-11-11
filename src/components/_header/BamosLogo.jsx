import BamosLogoBlack from "@/assets/images/bamosLogo_black.svg"
import BamosLogoAccent from "@/assets/images/bamosLogo_accent.svg"
import BamosLogoWhite from "@/assets/images/bamosLogo_white.svg"

export default function BamosLogo({ type = "black" }) {
  let logoSrc;

  switch (type) {
    case "black":
      logoSrc = BamosLogoBlack;
      break;
    case "accent":
      logoSrc = BamosLogoAccent;
      break;
    default:
      logoSrc = BamosLogoWhite;
  }

  return <img src={logoSrc} alt="logo" id="logo" />
}
