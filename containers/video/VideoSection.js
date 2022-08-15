
import ReactPlayer from 'react-player/lazy'
import styles from "./videoSection.module.css"

function VideoSectionModule(){
    return(
     <section className={styles.videoSection}>
       <div className="container">
           <div className={styles.videoWrapper}>
           <ReactPlayer controls={true} url="/videos/video1.mp4" />
           </div>
       </div>
     </section>
    )
}

export default VideoSectionModule