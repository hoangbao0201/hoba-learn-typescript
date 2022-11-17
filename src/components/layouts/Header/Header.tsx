import styles from "./Header.module.scss";
import classnames from "classnames/bind";

import { ChangeEvent, useContext, useRef, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import {
    iconBars,
    iconClose,
    iconLoading,
    iconLogin,
    iconMagnifyingGlass,
    iconRegister,
} from "../../../.public/iconSvg";
import { ButtonDarkMode } from "./ButtonDarkMode/ButtonDarkMode";
import { ThemeContext } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";
import { MenuSearch } from "../MenuSearch/MenuSearch";

const cx = classnames.bind(styles);

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isMenuSearchOpen, setIsMenuSearchOpen] = useState<boolean>(false);

    const [valueSearch, setValueSearch] = useState<string>("");

    const inputSearchRef = useRef<HTMLDivElement | any>(null);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleMenuSearchClose = () => {
        setIsMenuSearchOpen(false);
    };

    const eventChangeValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value);
    };

    const eventDeleteValueSearch = () => {
        setValueSearch("");
        inputSearchRef.current.focus();
    };

    return (
        <>
            <div className={cx("navheader")} />
            <div className={cx("wrapper")}>
                <div className={cx("container")}>
                    <div className={cx("dev-form-row")}>
                        <div
                            className={cx("button-bars")}
                            onClick={() => setIsModalOpen(true)}
                        >
                            {iconBars}
                        </div>
                        <a className={cx("grid-logo")} href="/">
                            <img
                                className={cx("image-logo")}
                                src="/images/logo-hb.png"
                            />
                        </a>
                    </div>
                    <div className={cx("dev-form-row")}>
                        <div className={cx("grid-search")}>
                            <div
                                className={cx(
                                    "button-search",
                                )}
                                onClick={() => setIsMenuSearchOpen(true)}
                            >
                                {iconMagnifyingGlass}
                            </div>
                            <input
                                ref={inputSearchRef}
                                className={cx(
                                    "search-input",
                                )}
                                placeholder="Tìm kiếm"
                                value={valueSearch}
                                onChange={eventChangeValueSearch}
                            />
                            {valueSearch && (
                                <div className={cx("grid-search-icon-action")}>
                                    {/* <p
                                        className={cx("close")}
                                        onClick={eventDeleteValueSearch}
                                    >
                                        {iconClose}
                                    </p> */}
                                    <p className={cx("loading")}>
                                        {iconLoading}
                                    </p>
                                </div>
                            )}
                        </div>
                        <ButtonDarkMode />
                    </div>
                    <div className={cx("accout")}>
                        <div className={cx("grid-item")}>
                            <Link className={cx("item")} to="/auth/login">
                                <span className={cx("item-icon")}>
                                    {iconLogin}
                                </span>
                                <div className={cx("item-title")}>
                                    Đăng nhập
                                </div>
                            </Link>
                        </div>
                        <div className={cx("grid-item")}>
                            <Link className={cx("item")} to="/auth/register">
                                <span className={cx("item-icon")}>
                                    {iconRegister}
                                </span>
                                <div className={cx("item-title")}>Đăng kí</div>
                            </Link>
                        </div>
                    </div>
                    <Navbar
                        isModalOpen={isModalOpen}
                        handleModalClose={handleModalClose}
                    />
                    <MenuSearch
                        isModalOpen={isMenuSearchOpen}
                        handleModalClose={handleMenuSearchClose}
                    />
                </div>
            </div>
        </>
    );
};
