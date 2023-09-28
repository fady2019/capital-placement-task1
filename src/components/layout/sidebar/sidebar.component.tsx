import classes from './sidebar.styles.module.css';

import MenuIcon from '../../../assets/icons/menu-icon.svg';
import HomeIcon from '../../../assets/icons/home-icon.svg';
import ListIcon from '../../../assets/icons/list-icon.svg';
import DefaultAvatar from '../../../assets/icons/default-avatar.png';

const Sidebar = () => {
    return (
        <aside className={classes['sidebar']}>
            <div>
                <img src={MenuIcon} alt="menu-icon" />
            </div>

            <div className={classes['mid-list']}>
                <img src={HomeIcon} alt="home-icon" />
                <img src={ListIcon} alt="list-icon" />
            </div>

            <div className={classes['bottom-list']}>
                <img src={DefaultAvatar} alt="default-avatar" />
            </div>
        </aside>
    );
};

export default Sidebar;
