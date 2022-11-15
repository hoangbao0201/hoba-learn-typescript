import classNames from 'classnames/bind'
import styles from './GlobalStyles.module.scss';
import "./app.css"
import { useEffect } from 'react';

const cx = classNames.bind(styles);

interface GlobalStylesProps {
    children: JSX.Element
}

export const GlobalStyles = ({ children } : GlobalStylesProps) => {
    const dark = false;
    return (
       <div className={cx('wrapper', `${!!dark || "dark"}`)}>
            {children}
       </div>
   )
}
