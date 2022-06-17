import React from "react";
import classNames from "classnames";

function Button({ onClick, className, style, text }) {
        return (
            <button onClick={onClick} className={classNames('button', className, {
                'button--outline' : style,
            })}>{text}</button>
        )
}

export default Button;