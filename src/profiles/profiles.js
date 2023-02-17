import { Table, Button, Tooltip, Popconfirm } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './profiles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';


const Profiles = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Hired Date',
            dataIndex: 'hiredDate',
            key: 'hiredDate'
        },
        {
            title: 'Employee Since',
            dataIndex: 'employeeSince',
            key: 'employeeSince'
        },
        {
            title: 'Resign Date',
            dataIndex: 'resignDate',
            key: 'resignDate'
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <>
                    <Tooltip title="Edit">
                        <Link to={"/profile"}>
                            <Button type="text" icon={<FontAwesomeIcon icon={faPencil} />}></Button>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Popconfirm
                            title="Delete employee"
                            description="Are you sure to delete the employee?"
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="text" icon={<FontAwesomeIcon icon={faTrash} />}></Button>
                        </Popconfirm>

                    </Tooltip>
                </>
            ),
        }
    ]

    let data = [
        {
            id: '1',
            name: 'John Brown',
            hiredDate: '2014-03-25'

        },
        {
            id: '2',
            name: 'Jim Green',
            hiredDate: '2017-02-28'
        },
        {
            id: '3',
            name: 'Joe Black',
            hiredDate: '2021-03-25'
        }
    ];

    // calculate the years and months since the employee started
    _.each(data, (employee) => {
        let hired = moment(employee.hiredDate);
        var current = moment();

        // get years
        var years = current.diff(hired, 'year');
        hired.add(years, 'years');

        // get months
        var months = current.diff(hired, 'months');

        employee.employeeSince = `${years} years ${months} months`;
    })

    // click on the rows to go to each employee profile

    return (
        <>
            <div className='profiles-header'>
                <h2>Employee Profiles</h2>
                <Link to={"/profile"}>
                    <Button className='summary-btn' type='primary'>Add new employee</Button>
                </Link>
            </div>
            <Table columns={columns} dataSource={data} size="small"></Table>
        </>
    );
}

export default Profiles;
