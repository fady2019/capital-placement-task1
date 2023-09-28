import classes from './card.styles.module.css';

const Card: React.FC<React.PropsWithChildren<{ title: string }>> = (props) => {
    const { title, children } = props;

    return (
        <div className={classes['card']}>
            <h2 className={classes['card__title']}>{title}</h2>
            <div className={classes['card__body']}>{children}</div>
        </div>
    );
};

export default Card;
