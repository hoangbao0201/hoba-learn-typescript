import classNames from "classnames/bind";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export const Footer = () => {
    const { state }: any = useContext(ThemeContext);

    return (
        <div className={cx("wrapper", `${state.dark && "dark"}`)}>
            <div className={cx("container")}>
                <a className={cx("grid-logo")} href="/">
                    <img
                        className={cx("image-logo")}
                        src="/images/logo-hb.png"
                    />
                </a>
                <div className={cx("copytright")}>
                    Copyright © 2022 NGUYEN HOANG BAO
                </div>
            </div>
        </div>
    );
};
