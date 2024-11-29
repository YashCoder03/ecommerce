import ProductCard from "../ProductCard/ProductCard.jsx";
import style from "../ProductSlideShow/ProductSlideShow.module.css"

function ProductSlideShow() {
  return (
    <>
        <div className={style.slideshow}>
            <div className={style.slidecard}><ProductCard></ProductCard></div>
            <div className={style.slidecard}><ProductCard></ProductCard></div>
            <div className={style.slidecard}><ProductCard></ProductCard></div>
            <div className={style.slidecard}><ProductCard></ProductCard></div>
        </div>
    </>
  )
}

export default ProductSlideShow