
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
    {
        label: (<Link to={``}></Link>),
        key: 'home',
        icon: <FontAwesomeIcon icon={faHouse} />
    },
    {
        label: (<Link to={`leave-history`}>Leave</Link>),
        key: 'leave',
        icon: <FontAwesomeIcon icon={faClock} />
    },
    {
        label: (<Link to={`profiles`}>Profiles</Link>),
        key: 'profiles',
        icon: <FontAwesomeIcon icon={faUser} />
    }
];

const Topbar = () => {
    const [current, setCurrent] = useState('time');
    const onClick = (e) => {
        setCurrent(e.key);
    }

    return <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}></Menu>
}

export default Topbar;