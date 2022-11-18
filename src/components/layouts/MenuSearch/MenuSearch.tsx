import styles from "./MenuSearch.module.scss";
import classNames from "classnames/bind";

import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import useOnclickOutside from "../../../hooks/use-click-on-outside";
import { ModalLayout } from "../../GlobalStyles/LayoutStyles";
import { iconClose, iconLoading } from "../../../.public/iconSvg";
import { ThemeContext } from "../../../context/ThemeContext";

const cx = classNames.bind(styles);

interface MenuSearchProps {
    isModalOpen: boolean;
    handleModalClose: () => void;
}

export const MenuSearch = ({
    isModalOpen,
    handleModalClose,
}: MenuSearchProps) => {
    const { state }: any = useContext(ThemeContext);

    const [valueSearch, setValueSearch] = useState<string>("");

    const inputSearchRef = useRef<HTMLDivElement | any>(null);

    const navbarRef = useRef<HTMLDivElement>(null);
    useOnclickOutside(navbarRef, handleModalClose);

    useEffect(() => {
        // if(isModalOpen) {
        //     inputSearchRef.current.focus();
        //     eventDeleteValueSearch()
        // }
        console.log(isModalOpen)
    }, [isModalOpen])

    const eventChangeValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value);
    };

    const eventDeleteValueSearch = () => {
        setValueSearch("");
        inputSearchRef.current.focus();
    };

    return (
        <ModalLayout active={isModalOpen}>
            <div
                ref={navbarRef}
                className={cx(
                    "wrapper",
                    "dev-scroll",
                    `${state.dark && "dark"}`,
                    `${!!isModalOpen && "active"}`
                )}
            >
                <div className={cx("container")}>
                    <div className={cx("navbar-header")}>
                        <span className={cx("header-title")}>Tìm kiếm</span>
                        <button
                            className={cx("button-close")}
                            onClick={handleModalClose}
                        >
                            {iconClose}
                        </button>
                    </div>
                    <div className={cx("dev-form-row", "content-search")}>
                        <div className={cx("grid-search")}>
                            <input
                                ref={inputSearchRef}
                                className={cx(
                                    "dev-form-input",
                                    "form-input",
                                )}
                                placeholder="Tìm kiếm"
                                value={valueSearch}
                                onChange={eventChangeValueSearch}
                            />
                            {valueSearch && (
                                <div className={cx("grid-search-icon-action")}>
                                    <p
                                        className={cx("close")}
                                        onClick={eventDeleteValueSearch}
                                    >
                                        {iconClose}
                                    </p>
                                    {/* <p className={cx("loading")}>
                                        {iconLoading}
                                    </p> */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};
