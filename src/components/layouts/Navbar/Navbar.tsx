import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

import { Devider, ModalLayout } from "../../GlobalStyles/LayoutStyles";
import { useContext, useEffect, useRef, useState } from "react";
import useOnclickOutside from "../../../hooks/use-click-on-outside";
import {
    iconArrowTop,
    iconClose,
    iconHome,
    iconImage,
    iconList,
    iconLogin,
    iconRank,
    iconRegister,
} from "../../../.public/iconSvg";
import { ThemeContext } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";

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
                status: "all",
            },
            {
                title: "Action",
                link: "/",
                status: "action",
            },
            {
                title: "Adult",
                link: "/",
                status: "adult",
            },
            {
                title: "Adventure",
                link: "/",
                status: "adventure",
            },
            {
                title: "Anime",
                link: "/",
                status: "anime",
            },
            {
                title: "Chuyển sinh",
                link: "/",
                status: "chuyen-sinh",
            },
            {
                title: "Comedy",
                link: "/",
                status: "comedy",
            },
            {
                title: "Comic",
                link: "/",
                status: "comic",
            },
            {
                title: "Cooking",
                link: "/",
                status: "cooking",
            },
            {
                title: "Cổ đại",
                link: "/",
                status: "co-dai",
            },
            {
                title: "Doujinshi",
                link: "/",
                status: "doujinshi",
            },
            {
                title: "Drama",
                link: "/",
                status: "drama",
            },
            {
                title: "Ecchi",
                link: "/",
                status: "ecchi",
            },
            {
                title: "Fantasy",
                link: "/",
                status: "fantasy",
            },
            {
                title: "Gender Bender",
                link: "/",
                status: "gender-bender",
            },
            {
                title: "Harem",
                link: "/",
                status: "harem",
            },
            {
                title: "Historical",
                link: "/",
                status: "historical",
            },
            {
                title: "Horror",
                link: "/",
                status: "horror",
            },
            {
                title: "Josei",
                link: "/",
                status: "josei",
            },
            {
                title: "Live Action",
                link: "/",
                status: "live-action",
            },
            {
                title: "Manga",
                link: "/",
                status: "manga",
            },
            {
                title: "Mahua",
                link: "/",
                status: "mahua",
            },
            {
                title: "Manhwa",
                link: "/",
                status: "manhwa",
            },
            {
                title: "Martial Arts",
                link: "/",
                status: "martial-arts",
            },
            {
                title: "Mature",
                link: "/",
                status: "mature",
            },
            {
                title: "Mecha",
                link: "/",
                status: "mecha",
            },
            {
                title: "Mystery",
                link: "/",
                status: "mystery",
            },
            {
                title: "Ngôn Tình",
                link: "/",
                status: "ngon-tinh",
            },
            {
                title: "One Shot",
                link: "/",
                status: "one-shot",
            },
            {
                title: "Psychological",
                link: "/",
                status: "psychological",
            },
            {
                title: "Romance",
                link: "/",
                status: "romance",
            },
            {
                title: "School Life",
                link: "/",
                status: "school-life",
            },
            {
                title: "Sci-fi",
                link: "/",
                status: "sci-fi",
            },
            {
                title: "Seinen",
                link: "/",
                status: "seinen",
            },
            {
                title: "Shoujo",
                link: "/",
                status: "shoujo",
            },
            {
                title: "Shoujo Ai",
                link: "/",
                status: "shoujo-ai",
            },
            {
                title: "Shounen",
                link: "/",
                status: "shounen",
            },
            {
                title: "Shounen Ai",
                link: "/",
                status: "shounen-ai",
            },
            {
                title: "Slice Of Life",
                link: "/",
                status: "slice-of-life",
            },
            {
                title: "Smut",
                link: "/",
                status: "smut",
            },
            {
                title: "Soft Yaoi",
                link: "/",
                status: "soft-yaoi",
            },
            {
                title: "Soft Yuri",
                link: "/",
                status: "soft-yuri",
            },
            {
                title: "Sports",
                link: "/",
                status: "sports",
            },
            {
                title: "Supernatural",
                link: "/",
                status: "supernatural",
            },
            {
                title: "Thiếu nhi",
                link: "/",
                status: "thieu-nhi",
            },
            {
                title: "Tragedy",
                link: "/",
                status: "tragedy",
            },
            {
                title: "Trinh thám",
                link: "/",
                status: "trinh-tham",
            },
            {
                title: "Truyện scan",
                link: "/",
                status: "truyen-scan",
            },
            {
                title: "Truyện màu",
                link: "/",
                status: "truyen-mau",
            },
            {
                title: "Webtoon",
                link: "/",
                status: "webtoon",
            },
            {
                title: "Xuyên Không",
                link: "/",
                status: "xuyen-khong",
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
        link: "/collection/images",
    },
];

export const Navbar = ({ isModalOpen, handleModalClose }: NavbarProps) => {
    const { state }: any = useContext(ThemeContext);

    const navbarRef = useRef<HTMLDivElement>(null);
    useOnclickOutside(navbarRef, handleModalClose);

    const [isDropdown, setIsDropdown] = useState<boolean>(false);

    const handleIsDropdown = (e: any) => {
        e.preventDefault();
        setIsDropdown((value) => !value);
    };

    useEffect(() => {
        if (!isModalOpen) {
            setIsDropdown(false);
        }
    }, [isModalOpen]);

    return (
        <ModalLayout active={isModalOpen}>
            <div
                ref={navbarRef}
                className={cx(
                    "wrapper",
                    "dev-scroll",
                    `${!!isModalOpen && "active"}`
                )}
            >
                <div className={cx("container")}>
                    <div className={cx("navbar-header")}>
                        <img
                            className={cx("image-logo")}
                            src="/images/logo-hb.png"
                        />
                        <button
                            className={cx("button-close")}
                            onClick={handleModalClose}
                        >
                            {iconClose}
                        </button>
                    </div>

                    <div className={cx("list-item")}>
                        {dataListItem.map((item, index) => {
                            let listChildren: any = null;
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
                                        onClick={(e) =>
                                            !!listChildren &&
                                            handleIsDropdown(e)
                                        }
                                    >
                                        <span className={cx("item-icon")}>
                                            {item.icon}
                                        </span>
                                        <div className={cx("item-title")}>
                                            {item.title}
                                        </div>
                                        {!!listChildren && (
                                            <span
                                                className={cx(
                                                    "iconArrowTop",
                                                    `${isDropdown && "active"}`
                                                )}
                                            >
                                                {iconArrowTop}
                                            </span>
                                        )}
                                    </a>
                                    {!!listChildren && (
                                        <div
                                            className={cx(
                                                "dropdown",
                                                `${isDropdown && "active"}`
                                            )}
                                        >
                                            <div className={cx("list-item")}>
                                                {listChildren}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        <Devider
                            color={
                                state.dark
                                    ? "rgba(255, 255, 255, 0.4)"
                                    : "rgba(0, 0, 0, 0.4)"
                            }
                        />
                        <div className={cx("grid-item")}>
                            <Link
                                className={cx("item")}
                                to="/auth/login"
                                onClick={handleModalClose}
                            >
                                <span className={cx("item-icon")}>
                                    {iconLogin}
                                </span>
                                <div className={cx("item-title")}>
                                    Đăng nhập
                                </div>
                            </Link>
                        </div>
                        <div className={cx("grid-item")}>
                            <Link
                                className={cx("item")}
                                to="/auth/register"
                                onClick={handleModalClose}
                            >
                                <span className={cx("item-icon")}>
                                    {iconRegister}
                                </span>
                                <div className={cx("item-title")}>Đăng kí</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};
