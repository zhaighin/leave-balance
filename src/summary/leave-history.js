
import { Table, Button, Card, Form, Select, Tooltip, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

// import data
import { employees } from '../dummyfile';
import './summary.css';

const LeaveHistory = () => {

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

    return (
        <>
            <h2>Leave Application History</h2>
            <Card title="Search" size="small">
                <Form name="basic" layout="horizontal" style={{ maxWidth: 400 }}>
                    <Form.Item label="Name" name="employeename">
                        <Select showSearch options={employeeList} />
                    </Form.Item>
                    <Form.Item label="Type" name="type">
                        <Select
                            options={LEAVE_TYPE}
                        />
                    </Form.Item>
                </Form>
                <div className='search-leave-history-button'>
                    <Button type="primary">Search</Button>
                    <Button>Reset</Button>
                </div>
            </Card>
            <br />
            <Table columns={columns} size='small'></Table>

        </>
    )
}

export default LeaveHistory;