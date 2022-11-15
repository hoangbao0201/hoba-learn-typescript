import classNames from "classnames/bind";
import { ChangeEvent, useState } from "react";
import { Button } from "../../components/GlobalStyles/LayoutStyles";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

export const Login = () => {
    const [dataForm, setDataForm] = useState({
        username: "",
        password: ""
    })

    const eventChangeDataForm = (e : ChangeEvent<HTMLInputElement>) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <form className={cx("form")}>
                    <div className={cx("dev-form-group")}>
                        <div className={cx("dev-form-tilte")}>
                            <label htmlFor="inputUsername">Username</label>
                        </div>
                        <input
                            id="inputUsername"
                            className={cx("dev-form-input")}
                            name="username"
                            value={dataForm.username}
                            onChange={eventChangeDataForm}
                        />
                    </div>
                    <div className={cx("dev-form-group")}>
                        <div className={cx("dev-form-tilte")}>
                            <label htmlFor="inputPassword">Password</label>
                        </div>
                        <input
                            id="inputPassword"
                            className={cx("dev-form-input")}
                            name="password"
                            type="password"
                            value={dataForm.password}
                            onChange={eventChangeDataForm}
                        />
                    </div>
                    <Button size="17px">Continue</Button>
                </form>
            </div>
        </div>
    );
};
