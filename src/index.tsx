import TitleBar from "./components/layout/TitleBar/index";
import styles from "./index.less";
const app = () => {
  return (
    <div className={styles.app}>
      <TitleBar />
    </div>
  );
};
export default app;
