import style from "./TheHeader.module.sass";
import TheHeaderMobile from '../TheHeaderMobi/TheHeaderMobi'
import TheHeaderPC from '../TheHeaderPC/TheHeaderPC'

const TheHeader = () => {
  const isMobile = window.innerWidth <= 1024
  
  return <header className={style.header}>
    {
      isMobile ? <TheHeaderMobile/>:<TheHeaderPC/>
    }
  </header>;
};

export default TheHeader;
