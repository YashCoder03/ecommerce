// import React from 'react'
import Slidebar from '../slidebar/Slidebar.jsx';
import styles from "../HomePage/Home.module.css"
import TodayDeals from "./TodayDeals/TodayDeals.jsx";
import HomeCatergories from './HomeCategories/HomeCatergories.jsx';
import BestSelling from './BestSelling/BestSelling.jsx';4
import banner from "../../assets/Banner/Speaker.png"
import Product from './Products/Product.jsx';
import Feature from './Feature/Feature.jsx';
function Home() {
  return (
    <>
      <div className={styles.tophome}>
        <div className={styles.catgories}>
          <ul className={styles.catgorieslist}>
            <li>Woman&apos;s Fashion</li>
            <li>Men&apos;s Fashion</li>
            <li>Electrions</li>
            <li>Home & LifeStyle</li>
            <li>Sport&apos;s & outdoor&apos;s</li>
            <li>Baby&apos;s and Toy&apos;s</li>
            <li>Groceries & Pets</li>
            <li>Health and Beauty</li>
          </ul>
        </div>
        <div className={styles.slideshow}>
          <Slidebar className={styles.slideshowtile}></Slidebar></div>
      </div>
      <div className="todaysDeals">
        <TodayDeals></TodayDeals>
      </div>
      <div className={styles.categories}><HomeCatergories/></div>
      <div className={styles.bestSelling}><BestSelling></BestSelling></div>
      <div className={styles.banner}><img src={banner}></img></div>
      <div className={styles.Product}><Product></Product></div>
      <div className={styles.featured}><Feature></Feature></div>
    </>
  )
}

export default Home