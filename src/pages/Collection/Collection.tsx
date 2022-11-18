import classNames from "classnames/bind";
import { useEffect } from "react";
import { iconDownload } from "../../.public/iconSvg";
import styles from "./Collection.module.scss";

const cx = classNames.bind(styles);

const dataListImages = [
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/0f/1f/13/0f1f13ec4ac41c0d15c91de463543218.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/e2/06/dd/e206ddf0f27e3b1084a18b9f6635a514.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/cf/9e/06/cf9e067318856df0177795c7073a981e.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/51/34/85/5134850fc92d7b0ee8a5e6a8f41ff0c3.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/56/e0/08/56e0089c83aa835762a253a5622bd383.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/0e/c5/0d/0ec50daf46236eb55817e5f05623fe45.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/46/e2/30/46e23047d9606d5ba8a4086ad7c879bc.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/56/e0/08/56e0089c83aa835762a253a5622bd383.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/a1/fe/94/a1fe94673eb48244d0648c63fcaef0d4.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/18/ef/e1/18efe1f76fd55dbbbac4d86722098f17.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/16/dd/1a/16dd1abb3f890a59e454149884a19a7c.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/78/2e/ed/782eed9f8d606659f012a9b1dde88c4e.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/ce/62/68/ce6268ec4bec819f851dfed0deabddda.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/30/08/49/30084925b41420310483eb4c9e0763d2.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/9f/ec/e7/9fece7c767675f1a68003d4ad0db9c3c.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/65/19/27/651927a060112253118522ad07be5426.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/ac/57/2c/ac572c221017f44abe3fe71e5d6168fc.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/f5/ae/79/f5ae79e7a568ac8009e9f868e0b96d22.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/4b/23/ca/4b23ca6fdeabbb1851889387fbd754a5.jpg",
        link: "/",
    },
    {
        title: "hello",
        pathImage:
            "https://i.pinimg.com/236x/3c/40/56/3c40569c90ae90c85f27beb27bef0826.jpg",
        link: "/",
    },
];

export const Collection = () => {
    useEffect(() => {
        document.title = "Bộ sưu tập - HoangBao";
    }, []);

    const eventDisableClickCard = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("list-image", "dev-scroll")}>
                    {dataListImages.map((item, index) => {
                        return (
                            <div className={cx("grid-item")} key={index}>
                                <a href={item.link} className={cx("item-link")}>
                                    <div className={cx("item-image")}>
                                        <img
                                            src={item.pathImage}
                                            className={cx("image")}
                                        />
                                    </div>
                                    <div className={cx("item-overlay")}></div>
                                    <div className={cx("item-action")} onClick={eventDisableClickCard}>
                                        <button
                                            className={cx("button-download")}
                                        >
                                            {iconDownload}
                                        </button>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
