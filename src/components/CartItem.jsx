import React, {useState, useContext} from "react"
import {Context} from "../Context"

function CartItem({item}) {

    const {cartItems, removeFromCart} = useContext(Context)
    const [isHovered, setIsHovered] = useState(false)

    const iconClassName = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            ></i>
            <img src={item.url} width="130px"/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
