import React from 'react';
import IcomoonReact from 'icomoon-react';

const iconSet = require('./selection.json');

type IconProps = {
    color?: string;
    size: string | number;
    icon: string;
    className?: string;
    onMouseEnter?: () => void
    onMouseLeave?: () => void
};

export const Icon: React.FC<IconProps> = (props) => {
    const {color, size = '100%', icon, className = '', onMouseEnter, onMouseLeave} = props;
    return (
        <IcomoonReact
            className={className}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
};
