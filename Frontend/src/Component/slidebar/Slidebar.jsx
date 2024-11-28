
import ss1 from "../../assets/slidebar/ss1.jpg"
import ss2 from "../../assets/slidebar/ss2.jpg"
import ss3 from "../../assets/slidebar/ss3.jpg"
import ss4 from "../../assets/slidebar/ss4.jpg"
import ss5 from "../../assets/slidebar/ss5.jpg"
import { useEffect,useState } from "react"
import style from "./Slidebar.module.css"
function Slidebar() {
    const images = [
        ss1,
        ss2,
        ss3,
        ss4,
        ss5,   
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
      
    
    
      useEffect(() => {
        const intervalId = setInterval(nextImage, 3000); 
        return () => clearInterval(intervalId);
      }, []);
  return (
    <div className={style.slideshowcontainer}>
      <img src={images[currentIndex]} alt="Slideshow" className={style.slideshowimage} />
      
    </div>
  )
}

export default Slidebar