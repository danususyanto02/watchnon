import React from "react";
import Proptypes from "prop-types";

PrimaryButton.Proptypes = {
    type: Proptypes.oneOf(['button', 'submit', 'reset']),
    className: Proptypes.string,
    variant: Proptypes.oneOf(['warning', 'primary', 'danger', 'light-outline', 'white-outline']),
    processing: Proptypes.bool,
    children: Proptypes.node,
}

export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick, variant="Primary", }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
               `rounded-2xl py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
