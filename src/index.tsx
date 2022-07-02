import styles from './index.less';

import TitleBar from './components/layout/TitleBar/index';
const app = () => {
  return (
    <div className={styles.app}>
      <TitleBar />
    </div>
  );
};
export default app;
