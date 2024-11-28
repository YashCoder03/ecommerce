// import React from 'react';
import style from "../Header/Header.module.css"
import wishlist from "../../assets/Header/Wishlist.png"
import cart from "../../assets/Header/Cart.png"
import user from "../../assets/Header/User.png"
import search from "../../assets/Header/searchbtn.png"

function Header() {
  return (
    <>
    <div className={style.topheader}>
      <div className="topheadertext">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
      <span>ShopNow</span>
    </div>
    <div className={style.header}>
      <div className={style.sitename}>Yash Mart</div>
      <div className={style.leftheader}>
        <ul className={style.categories}>
          <li className={style.home}>Home</li>
          <li className={style.home}>Contact</li>
          <li className={style.about}>About</li>
          <li className={style.signup}>Sign Up</li>
        </ul>
      </div>
      <div className={style.rightheader}>
        <div className={style.searchbox}>
          <input type="text" placeholder="What are you looking for?" className={style.searchtext} />
          <button className={style.searchbutton}><img src={search}></img></button>
        </div>
        <div className={style.icons}>
          <button className={style.whishlist}><img src={wishlist}/></button>
          <button className={style.cart}><img src={cart}/></button>
          <button className={style.profile}><img src={user}/></button>
        </div>
      </div>

    </div>
    </>  
  );
}

export default Header;
