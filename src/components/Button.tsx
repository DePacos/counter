import {ButtonProps} from "../types/counter.ts";



export const Button = ({name, onClick, disabled}: ButtonProps ) => {
    return (
        <button onClick={onClick} disabled={disabled}>{name}</button>
    );
};