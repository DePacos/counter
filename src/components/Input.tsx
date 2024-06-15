import {InputProps} from "../types/counter.ts";



export const Input = ({type, value, onChange, className}:InputProps) => {
    return (
        <input type={type} value={value} onChange={onChange} className={className} />
    );
};

