import React from 'react';
import './index.css'

/** Props */
interface IButton {
    onClick: () => void,
    title: string
}

/** Custom component for button */
const Button = ({title, onClick} : IButton) => {
    return(
        <div className="contanier">
            <button className="button" onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default Button;