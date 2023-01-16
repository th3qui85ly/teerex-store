import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => {
    const { cartData } = useSelector((store) => store.cartReducer);

    return (
        <>
            <div className="navbar">
                <Link to='/'><h3>TeeRex Store</h3></Link>
                <div className="rightIcon">
                    <Link to='/'><span>Products</span></Link>
                    <Link to='/cart'>
                        <span>
                            <i className="fa fa-shopping-cart" aria-hidden="true" id='cartIcon'>
                                <span className='cartCount'>{cartData.length ? cartData.length : "0"}</span>
                            </i>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;