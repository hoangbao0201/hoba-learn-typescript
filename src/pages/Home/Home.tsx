import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

export const Home = () => {
    return (
        <div className={cx("wrapper", "darkdemo")}>
            <div className={cx("container")}>Home</div>
        </div>
    );
};
