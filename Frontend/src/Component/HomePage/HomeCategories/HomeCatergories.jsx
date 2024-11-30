// import React from 'react'
import style from "../HomeCategories/HomeCatergories.module.css";
import CatergoriesButton from "../CatergoriesButton/CatergoriesButton";
function HomeCatergories() {
  return (
    <>
    <div className={style.categories}>
        <div className={style.title}><span> &nbsp;</span>Categories</div>
        <div className={style.bigtitle}>Browser by Categories</div>
        <div className={style.catbanner}>
            <CatergoriesButton/>
            <CatergoriesButton/>
            <CatergoriesButton/>
            <CatergoriesButton/>
            <CatergoriesButton/>
            <CatergoriesButton/>
            </div>
    </div>
    </>
  )
}

export default HomeCatergories