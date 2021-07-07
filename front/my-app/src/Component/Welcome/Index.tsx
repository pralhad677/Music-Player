import React from 'react'
import  styles from './Index.module.css'

const Image = window.location.origin + '/' + '1.jpg'
console.log(Image)
function Index() {
  console.log(window.location.origin)
  return (
    <div className={styles.div1}>
      <div className={styles.imgParent}> 
        {/* src={window.location.origin+'/'+'1.jpg'}  */}
        {/* style={{ backgroundImage: `url(require("images/img.svg"))` */} 
        {/* className={styles.img}  */}
        {/* <img style={{ backgroundImage: `url(${require("../../../public/1.jpg")})` }}  alt="enjoying"/> */}
        <img src={window.location.origin+'/'+'1.jpg'} className={styles.img}  alt="enjoying"/> 
      </div>
    </div>
  )   
}
 
export default Index
