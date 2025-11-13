import { useState } from "react";
import BamosDrawerButton from "./_drawerMenu/BamonDrawerButton/BamosDrawerButton";
import BamosDrawerMenu from "./_drawerMenu/BamonsDrawerMenu/BamosDrawerMenu";
import BamosLogo from "../_commons/BamosLogo";
import styles from './HeaderNav.module.css';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <div className={`wrapper ${styles.headerWrapper}`}>
            <BamosLogo type="black" />
            <BamosDrawerButton isOpen={isOpen} handleClick={handleClick}/>
            <BamosDrawerMenu isOpen={isOpen} handleClick={handleClick} />
        </div>
    )
}
