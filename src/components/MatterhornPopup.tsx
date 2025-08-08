import { FunctionComponent } from "react";
import styles from "./MatterhornPopup.module.css";

export type MatterhornPopupType = {
  className?: string;
  onClose?: () => void;
};

// 这个方法yigersha
const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.matterhornPopup, className].join(" ")}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/sssdfsdfY?rhjfjyfcgx/jgoplay=0&mute=0`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};
//这是新增的注释2
export default MatterhornPopup;
