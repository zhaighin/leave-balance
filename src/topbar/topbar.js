
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Menu } from 'antd';

const items = [
    {
        label: 'Time Tracking',
        key: 'time',
        icon: <FontAwesomeIcon icon={faClock} />,
    }
];

const Topbar = () => {
    const [current, setCurrent] = useState('time');
    const onClick = (e) => {
        setCurrent(e.key)
    }

    return <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}></Menu>
}

export default Topbar;