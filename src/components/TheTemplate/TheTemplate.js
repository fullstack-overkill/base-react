import style from './TheTemplate.module.sass';

import TheHeader from '../TheHeader/TheHeader'
import TheFooter from '../TheFooter/TheFooter'

const TheTemplate = (props) => {
    return (<div className={style.TheTemplate}>
        <TheHeader />
        <div className={style.TheTemplateContent}>
            {props.children}
        </div>
        <TheFooter />
    </div>);
}

export default TheTemplate;
