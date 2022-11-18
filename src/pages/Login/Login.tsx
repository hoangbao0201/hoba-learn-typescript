import classNames from "classnames/bind";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button } from "../../components/GlobalStyles/LayoutStyles";
import { ThemeContext } from "../../context/ThemeContext";
import {
    iconFacebook,
    iconGithub,
    iconGoogle,
    iconHideEye,
    iconShowEye,
} from "../../.public/iconSvg";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

export const Login = () => {
    const { state }: any = useContext(ThemeContext);

    const [isShow, setIsShow] = useState<boolean>(false);
    const [dataForm, setDataForm] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        document.title = "Đăng nhập - Hoangbao"
    }, [])

    // Handle
    const eventChangeDataForm = (e: ChangeEvent<HTMLInputElement>) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    const eventSubmitForm = (e: SubmitEvent) => {
        e.preventDefault();
    };

    // Event login
    const eventLoginGoogle = () => {
        console.log("Login Google");
    };
    const eventLoginGithub = () => {
        console.log("Login Github");
    };
    const eventLoginFacebook = () => {
        console.log("Login Facebook");
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <form className={cx("form")}>
                    <div className={cx("grid-logo")}>
                        <img
                            className={cx("image-logo")}
                            src="/images/logo-hb.png"
                        />
                    </div>
                    <Button
                        boxSd={state.dark && "rgba(255, 255, 255, 0.4)"}
                        bg="#df4930"
                        bgHv="#cd452e"
                        color="#ffff"
                        size="15px"
                        onClick={eventLoginGoogle}
                        className={cx("buton-login")}
                    >
                        <i className={cx("button-icon")}>{iconGoogle}</i>
                        Continute width Google
                    </Button>
                    <Button
                        boxSd={state.dark && "rgba(255, 255, 255, 0.4)"}
                        size="15px"
                        onClick={eventLoginFacebook}
                        className={cx("buton-login")}
                    >
                        <i className={cx("button-icon")}>{iconFacebook}</i>
                        Continute width Facebook
                    </Button>
                    <Button
                        boxSd={state.dark && "rgba(255, 255, 255, 0.4)"}
                        bg="#24292e"
                        bgHv="#000"
                        size="15px"
                        onClick={eventLoginGithub}
                        className={cx("buton-login")}
                    >
                        <i className={cx("button-icon")}>{iconGithub}</i>
                        Continute width Github
                    </Button>

                    <div className={cx("devider")}></div>

                    <div className={cx("dev-form-group")}>
                        <div className={cx("dev-form-tilte", "form-title")}>
                            <label htmlFor="inputUsername">Username</label>
                        </div>
                        <input
                            id="inputUsername"
                            className={cx("dev-form-input", "form-input")}
                            name="username"
                            value={dataForm.username}
                            onChange={eventChangeDataForm}
                        />
                    </div>
                    <div className={cx("dev-form-group")}>
                        <div className={cx("dev-form-tilte", "form-title")}>
                            <label htmlFor="inputPassword">Password</label>
                        </div>
                        <div className={cx("dev-form-grid-input")}>
                            <input
                                id="inputPassword"
                                className={cx("dev-form-input", "form-input")}
                                name="password"
                                type={isShow ? "text" : "password"}
                                value={dataForm.password}
                                onChange={eventChangeDataForm}
                            />
                            {dataForm.password.length > 0 && (
                                <div
                                    className={cx("icon-eye-password")}
                                    onClick={() => setIsShow((value) => !value)}
                                >
                                    {!isShow ? iconHideEye : iconShowEye}
                                </div>
                            )}
                        </div>
                    </div>
                    <Button
                        bg="#1da1f2"
                        bgHv="#0096f2"
                        size="15px"
                        onClick={eventSubmitForm}
                        className={cx("buton-login")}
                    >
                        Continue
                    </Button>
                </form>
            </div>
        </div>
    );
};
