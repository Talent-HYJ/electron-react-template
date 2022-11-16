import { useState } from "react";

import styles from "./index.less";
import closeIcon from "@/images/window/close.svg";
import max from "@/images/window/max.svg";
import unMax from "@/images/window/middle.svg";
import min from "@/images/window/min.svg";

const Index = () => {
  const [isMax, setIsMax] = useState(false);
  const isMac = process.platform === "darwin";
  const handleWindow = (type: WindowOperateType) => {
    window.api.operateWindow(type);
  };
  window.onresize = () => {
    setIsMax(window.api.isMaximze());
  };
  return (
    <div className={styles.menu_box}>
      <div className={styles.menu_content}>菜单栏</div>
      {!isMac && (
        <div className={styles.window_menus}>
          <img src={min} alt="min" width={16} onClick={() => handleWindow("minimize")} />
          <img
            src={isMax ? unMax : max}
            alt="max"
            width={16}
            onClick={() => handleWindow("maximize")}
          />
          <img src={closeIcon} alt="max" width={16} onClick={() => handleWindow("close")} />
        </div>
      )}
    </div>
  );
};
export default Index;
