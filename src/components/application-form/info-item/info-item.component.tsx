import classes from './info-item.styles.module.css';

const InfoItem: React.FC<React.PropsWithChildren> = (props) => {
    return <li className={classes['info-item']}>{props.children}</li>;
};

export default InfoItem;
