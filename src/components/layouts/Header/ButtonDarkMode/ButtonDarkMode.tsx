import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { iconMoon, iconSun } from "../../../../public/iconSvg";
import styles from "./ButtonDarkMode.module.scss";

const cx = classNames.bind(styles);

export const ButtonDarkMode = () => {
    const { state, setThemes }: any = useContext(ThemeContext);
    const [isEnabled, setIsEnable] = useState<boolean>(state.dark);

    const toogleState = () => {
        setIsEnable((value) => !value);
    };

    useEffect(() => {
        if (isEnabled) {
            setThemes(isEnabled);
            localStorage.setItem("darkmode", "true");
        } else {
            setThemes(isEnabled);
            localStorage.setItem("darkmode", "false");
        }
    }, [isEnabled]);

    return (
        <label
            className={cx("button-mode", `${!!isEnabled && "dark"}`)}
            htmlFor="toogle"
        >
            <div className={cx("icons")}>{isEnabled ? iconMoon : iconSun}</div>

            <input
                id="toogle"
                className={cx("input-toggle")}
                type="checkbox"
                checked={isEnabled}
                onChange={toogleState}
            />
        </label>
    );
};
