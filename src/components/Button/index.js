import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    text = false,
    rounded = false,
    children,
    leftIcon,
    rightIcon,
    onClick,
    className,
    ...passProps
}) {
    //to:link noi bo , href: link ben ngoai
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    // const classes = cx('wrapper');
    const classes = cx('wrapper', {
        primary, //de primary thi se them 1 class=primary vao classes
        outline,
        small,
        large,
        text,
        disabled,
        leftIcon,
        rightIcon,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {/* {leftIcon && <span className={cx('icon')}>{leftIcon}</span>} */}
            <span className={cx('title')}>{children}</span>
            {/* {rightIcon && <span className={cx('icon')}>{rightIcon}</span>} */}
        </Comp>
    );
}

export default Button;
