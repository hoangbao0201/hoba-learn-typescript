import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

import { Devider, ModalLayout } from "../../GlobalStyles/LayoutStyles";
import { useContext, useEffect, useRef, useState } from "react";
import useOnclickOutside from "../../../hooks/use-click-on-outside";
import {
    iconArrowTop,
    iconHome,
    iconImage,
    iconList,
    iconLogin,
    iconRank,
    iconRegister,
} from "../../../public/iconSvg";
import { ThemeContext } from "../../../context/ThemeContext";

const cx = classNames.bind(styles);

interface NavbarProps {
    isModalOpen: boolean;
    handleModalClose: () => void;
}

const dataListItem = [
    {
        title: "Trang chủ",
        icon: iconHome,
        link: "/",
    },
    {
        title: "Thể loại",
        icon: iconList,
        link: "/",
        children: [
            {
                title: "Tất cả",
                link: "/",
            },
            {
                title: "Action",
                link: "/",
            },
            {
                title: "Adult",
                link: "/",
            },
            {
                title: "Adventure",
                link: "/",
            },
            {
                title: "Anime",
                link: "/",
            },
            {
                title: "Chuyển sinh",
                link: "/",
            },
            {
                title: "Comedy",
                link: "/",
            },
            {
                title: "Comic",
                link: "/",
            },
            {
                title: "Cooking",
                link: "/",
            },
            {
                title: "Cổ đại",
                link: "/",
            },
            {
                title: "Doujinshi",
                link: "/",
            },
            {
                title: "Drama",
                link: "/",
            },
            {
                title: "Ecchi",
                link: "/",
            },
            {
                title: "Fantasy",
                link: "/",
            },
            {
                title: "Gender Bender",
                link: "/",
            },
            {
                title: "Harem",
                link: "/",
            },
            {
                title: "Historical",
                link: "/",
            },
            {
                title: "Horror",
                link: "/",
            },
            {
                title: "Josei",
                link: "/",
            },
            {
                title: "Live Action",
                link: "/",
            },
            {
                title: "Manga",
                link: "/",
            },
            {
                title: "Mahua",
                link: "/",
            },
            {
                title: "Manhwa",
                link: "/",
            },
            {
                title: "Martial Arts",
                link: "/",
            },
            {
                title: "Mature",
                link: "/",
            },
            {
                title: "Mecha",
                link: "/",
            },
            {
                title: "Mystery",
                link: "/",
            },
            {
                title: "Ngôn Tình",
                link: "/",
            },
            {
                title: "One Shot",
                link: "/",
            },
            {
                title: "Psychological",
                link: "/",
            },
            {
                title: "Romance",
                link: "/",
            },
            {
                title: "School Life",
                link: "/",
            },
            {
                title: "Sci-fi",
                link: "/",
            },
            {
                title: "Seinen",
                link: "/",
            },
            {
                title: "Shoujo",
                link: "/",
            },
            {
                title: "Shoujo Ai",
                link: "/",
            },
            {
                title: "Shounen",
                link: "/",
            },
            {
                title: "Shounen Ai",
                link: "/",
            },
            {
                title: "Slice Of Life",
                link: "/",
            },
            {
                title: "Smut",
                link: "/",
            },
            {
                title: "Soft Yaoi",
                link: "/",
            },
            {
                title: "Soft Yuri",
                link: "/",
            },
            {
                title: "Sports",
                link: "/",
            },
            {
                title: "Supernatural",
                link: "/",
            },
            {
                title: "Thiếu nhi",
                link: "/",
            },
            {
                title: "Tragedy",
                link: "/",
            },
            {
                title: "Trinh thám",
                link: "/",
            },
            {
                title: "Truyện scan",
                link: "/",
            },
            {
                title: "Truyện màu",
                link: "/",
            },
            {
                title: "Webtoon",
                link: "/",
            },
            {
                title: "Xuyên Không",
                link: "/",
            },
        ],
    },
    {
        title: "Top lượt xem",
        icon: iconRank,
        link: "/",
    },
    {
        title: "Bộ sưu tập",
        icon: iconImage,
        link: "/",
    },
];

export const Navbar = ({ isModalOpen, handleModalClose }: NavbarProps) => {
    const { state } : any = useContext(ThemeContext);

    const navbarRef = useRef<HTMLDivElement>(null);
    useOnclickOutside(navbarRef, handleModalClose);

    const [isDropdown, setIsDropdown] = useState<boolean>(false);

    const handleIsDropdown = (e: any) => {
        e.preventDefault();
        setIsDropdown(value => !value)
    };

    useEffect(() => {
        if(!isModalOpen) {
            setIsDropdown(false);
        }
    }, [isModalOpen])

    return (
        <ModalLayout active={isModalOpen}>
            <div
                ref={navbarRef}
                className={cx("wrapper", "dev-scroll", `${state.dark && "dark"}`, `${!!isModalOpen && "active"}`)}
            >
                <div className={cx("container")}>
                    <button onClick={handleModalClose}>close</button>
                </div>

                <div className={cx("list-item")}>
                    {dataListItem.map((item, index) => {
                        let listChildren : any = null;
                        if (item.children) {
                            listChildren = item.children.map(
                                (itemChild, indexChild) => {
                                    return (
                                        <a
                                            key={indexChild}
                                            className={cx("itemChild")}
                                            href={itemChild.link}
                                        >
                                            <div
                                                className={cx(
                                                    "itemChild-title"
                                                )}
                                            >
                                                {itemChild.title}
                                            </div>
                                        </a>
                                    );
                                }
                            );
                        }
                        return (
                            <div key={index} className={cx("grid-item")}>
                                <a
                                    className={cx("item")}
                                    href={item.link}
                                    onClick={(e) => ( !!listChildren && handleIsDropdown(e) )}
                                >
                                    <span className={cx("item-icon")}>
                                        {item.icon}
                                    </span>
                                    <div className={cx("item-title")}>
                                        {item.title}
                                    </div>
                                    {!!listChildren && (
                                        <span className={cx("iconArrowTop", `${isDropdown && "active"}`)}>
                                            {iconArrowTop}
                                        </span>
                                    )}
                                </a>
                                {!!listChildren && (
                                    <div className={cx("dropdown", `${ isDropdown && "active"}`)}>
                                        {listChildren}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    <Devider color={state.dark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)"}/>
                    <div className={cx("grid-item")}>
                        <a
                            className={cx("item")}
                            href="/auth/login"
                        >
                            <span className={cx("item-icon")}>
                                {iconLogin}
                            </span>
                            <div className={cx("item-title")}>
                                Đăng nhập
                            </div>
                        </a>
                    </div>
                    <div className={cx("grid-item")}>
                        <a
                            className={cx("item")}
                            href="/auth/register"
                        >
                            <span className={cx("item-icon")}>
                                {iconRegister}
                            </span>
                            <div className={cx("item-title")}>
                                Đăng kí
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};
