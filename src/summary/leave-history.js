
import { Table, Button, Card, Form, Select, Tooltip, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

// import data
import { employees, leaveHistory } from '../dummyfile';
import './summary.css';

const LeaveHistory = () => {
    const [history, setHistory] = useState(leaveHistory);

    const employeeList = employees.map((employee) => {
        return {
            value: employee.name,
            label: employee.name
        }
    })

    const LEAVE_TYPE = [
        {
            label: "Annual Vacation",
            value: "al"
        },
        {
            label: "Annual Vacation 1st Half",
            value: "al1"
        },
        {
            label: "Annual Vacation 2nd Half",
            value: "al2"
        },
        {
            label: "Sick",
            value: "sick"
        },
        {
            label: "Unpaid",
            value: "upl"
        },
        {
            label: "Unpaid 1st Half",
            value: "upl1"
        },
        {
            label: "Unpaid 2nd Half",
            value: "upl2"
        }
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Day',
            dataIndex: 'day',
            key: 'day'
        }, {
            title: 'Type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'From',
            dataIndex: 'from',
            key: 'from'
        },
        {
            title: 'To',
            dataIndex: 'to',
            key: 'to'
        },
        {
            title: 'Created On',
            dataIndex: 'createdOn',
            key: 'createdOn'
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <>
                    <Tooltip title="Edit">
                        <Link to={"leave"}>
                            <Button type="text" icon={<FontAwesomeIcon icon={faPencil} />}></Button>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Popconfirm
                            title="Delete leave"
                            description="Are you sure to delete leave?"
                            okText="Yes"
                            cancelText="No">
                            <Button type="text" icon={<FontAwesomeIcon icon={faTrash} />}></Button>
                        </Popconfirm>

                    </Tooltip>
                </>
            ),
        }
    ]

    const formRef = React.useRef(null);

    const onSearch = (values) => {
        const { name, type } = values;

        var filterList = leaveHistory.filter((history) => {
            // check employee name
            var isEmployee = name ? history.name === name : true;
            var isType = type ? history.type === type : true;
            return isEmployee && isType;
        })

        setHistory(filterList);
    }

    const onReset = () => {
        formRef.current?.resetFields();
        setHistory(leaveHistory);
    }

    return (
        <>
            <h2>Leave Application History</h2>
            <Card title="Search" size="small">
                <Form name="basic" layout="horizontal" style={{ maxWidth: 400 }} onFinish={onSearch} ref={formRef}>
                    <Form.Item label="Name" name="name">
                        <Select showSearch options={employeeList} allowClear />
                    </Form.Item>
                    <Form.Item label="Type" name="type">
                        <Select
                            options={LEAVE_TYPE}
                            allowClear
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" className='search-leave-history-button'>Search</Button>
                        <Button htmlType="button" onClick={onReset}>Reset</Button>
                    </Form.Item>
                </Form>
            </Card>
            <br />
            <Table columns={columns} size='small' dataSource={history}></Table>

        </>
    )
}

export default LeaveHistory;