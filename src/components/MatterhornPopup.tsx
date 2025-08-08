import { FunctionComponent } from "react";
import styles from "./MatterhornPopup.module.css";

export type MatterhornPopupType = {
  className?: string;
  onClose?: () => void;
};

<<<<<<< HEAD
// 这个方法是一个方法
=======
// 这个方法yigersha
>>>>>>> main
const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.matterhornPopup, className].join(" ")}>
      <iframe
        className={styles.video}
<<<<<<< HEAD
        src={`https://www.youtube.com/embed/DdsdfsdgsdfY?rel=1&autoplay=0&mute=0`}
=======
        src={`https://www.youtube.com/embed/sssssdfsdfY?rel=0&autoplay=0&mute=0`}
>>>>>>> main
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default MatterhornPopup;
