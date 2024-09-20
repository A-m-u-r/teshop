import React from 'react';
import styles from './style.module.css'

interface ISwitch{
    isOn: boolean;
    handleToggle: () => void;
    onColor: any
}
//switch component
const Switch: React.FC<ISwitch> = ({ isOn, handleToggle, onColor }) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className={styles.checkbox}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && onColor }}
                className={styles.label}
                htmlFor={`react-switch-new`}
            >
                <span className={styles.button} />
            </label>
        </>
    );
};

export default Switch;