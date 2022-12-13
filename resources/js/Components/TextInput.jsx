import { forwardRef, useEffect, useRef } from 'react';
import Proptypes from "prop-types";

forwardRef.Proptypes = {
    type: Proptypes.oneOf(['text', 'email', 'password', 'number', 'file']),
    name: Proptypes.string,
    value: Proptypes.oneOf([Proptypes.string, Proptypes.number,]),
    defaultValue: Proptypes.oneOf([Proptypes.string, Proptypes.number,]),
    className: Proptypes.string,
    variant: Proptypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: Proptypes.string,
    require: Proptypes.bool,
    isFocused: Proptypes.bool,
    handleChange: Proptypes.func,
    placeholder: Proptypes.string,
    isError: Proptypes.bool,
}

export default forwardRef(function TextInput(
    { type = 'text', name, id, value, className, autoComplete, required, isFocused, handleChange, defaultValue, variant = 'primary', placeholder, isError },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className={
                    `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && 'input-error'} input-${variant} ${className}` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                defaultValue={defaultValue}

            />
        </div>
    );
});
