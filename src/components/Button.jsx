import React from "react";
import classNames from "classnames";

function Button({ onClick, className, style, children }) {
        return (
            <button onClick={onClick} className={classNames('button', className, {
                'button--outline' : style,
            })}>{children}</button>
        )
}

export default Button;