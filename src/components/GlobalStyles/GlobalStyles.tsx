import classNames from 'classnames/bind'
import styles from './GlobalStyles.module.scss';
import "./app.css"
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const cx = classNames.bind(styles);

interface GlobalStylesProps {
    children: JSX.Element
}

export const GlobalStyles = ({ children } : GlobalStylesProps) => {
    const { state }: any = useContext(ThemeContext);

    return (
       <div className={cx('wrapper', `${!!state.dark && "dark"}`)}>
            {children}
       </div>
   )
}
