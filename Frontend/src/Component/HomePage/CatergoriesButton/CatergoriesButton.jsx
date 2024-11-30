import style from "../CatergoriesButton/Catergories.module.css"
import phones from "../../../assets/Catimg/phone.png"
function CatergoriesButton() {
  return (
    <>
        <div className={style.buttonarea}>
            <div className={style.btnitem}>
                <img src={phones}/>
                <span>Phones</span>
            </div>
        </div>
    </>
  )
}

export default CatergoriesButton