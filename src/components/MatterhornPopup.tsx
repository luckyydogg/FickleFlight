import { FunctionComponent } from "react";
import styles from "./MatterhornPopup.module.css";

export type MatterhornPopupType = {
  className?: string;
  onClose?: () => void;
};

// 这个方法是一个方法
const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.matterhornPopup, className].join(" ")}>
      <iframe
        className={styles.video}
        src={`https://www.youtube/jgjf/DdsdfsdgsdfY?rel=1&autoplay=0&mute=0`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default MatterhornPopup;
