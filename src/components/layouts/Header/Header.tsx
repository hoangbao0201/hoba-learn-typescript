import styles from "./Header.module.scss";
import classnames from "classnames/bind";

import { useContext, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { iconBars, iconLogin, iconRegister } from "../../../public/iconSvg";
import { ButtonDarkMode } from "./ButtonDarkMode/ButtonDarkMode";
import { ThemeContext } from "../../../context/ThemeContext";

const cx = classnames.bind(styles);

export const Header = () => {
    const { state }: any = useContext(ThemeContext);

    // const state = {
    //     dark: true
    // }

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={cx("wrapper", `${state.dark ? "dark" : ""}`)}>
            <div className={cx("container")}>
                <div
                    className={cx("button-bars")}
                    onClick={() => setIsModalOpen(true)}
                >
                    {iconBars}
                </div>
                <div className={cx("search")}>
                    <input
                        className={cx("search-input")}
                        placeholder="Tìm kiếm"
                    />
                    <ButtonDarkMode />
                </div>
                <div className={cx("action")}>

                    <div className={cx("grid-item")}>
                        <a className={cx("item")} href="/auth/login">
                            <span className={cx("item-icon")}>{iconLogin}</span>
                            <div className={cx("item-title")}>Đăng nhập</div>
                        </a>
                    </div>
                    <div className={cx("grid-item")}>
                        <a className={cx("item")} href="/auth/register">
                            <span className={cx("item-icon")}>
                                {iconRegister}
                            </span>
                            <div className={cx("item-title")}>Đăng kí</div>
                        </a>
                    </div>
                </div>
                <Navbar
                    isModalOpen={isModalOpen}
                    handleModalClose={handleModalClose}
                />
            </div>
        </div>
    );
};
