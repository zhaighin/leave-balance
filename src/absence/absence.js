
import { useState } from 'react'
import { DatePicker, Form, Input, Select, Card, Button, Statistic, Row, Col } from 'antd';
import _ from 'lodash';
import { Link } from 'react-router-dom';

// importing css
import './absence.css';

// import data
import { employees } from '../dummyfile';
const { RangePicker } = DatePicker;

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

const Absence = () => {

    const [balanceToday, setBalanceToday] = useState({
        annual: 0,
        sick: 0
    });

    const employeeList = employees.map((employee) => {
        return {
            value: employee.name,
            label: employee.name
        }
    })

    // when click on employee name, refresh the available balance
    const refreshBalance = (value) => {
        // search for the employee to get leave balance
        const selected = _.find(employees, { name: value });
        setBalanceToday({
            annual: selected.annualLeave,
            sick: selected.sickLeave
        })
    }

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <>
            <h2>Leave Details</h2>
            <Card size="small" title="Available Balance as of Today">
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Annual Vacation" value={balanceToday.annual} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Sick Leave" value={balanceToday.sick} />
                    </Col>
                </Row>
            </Card>
            <Form name="basic" layout="vertical" onFinish={onFinish} initialValues={{ type: 'al', reason: '' }}>
                <Form.Item label="Employee Name" name="name" rules={[{
                    required: true,
                    message: 'Please input employee name'
                }]}>
                    <Select showSearch options={employeeList} onChange={refreshBalance} />
                </Form.Item>
                <Form.Item label="Leave Dates" name="date" rules={[{
                    required: true,
                    message: 'Please input leave dates'
                }]}>
                    <RangePicker />
                </Form.Item>
                <Form.Item label="Type" name="type">
                    <Select
                        options={LEAVE_TYPE}
                    />
                </Form.Item>
                <Form.Item label="Reason" name="reason">
                    <Input />
                </Form.Item>
                <Form.Item>
                    {/* <Link to={'/'}> */}
                        <Button htmlType="submit" type="primary" className='leave-details-button'>Save</Button>
                        <Button>Cancel</Button>
                    {/* </Link> */}
                </Form.Item>
            </Form>

        </>
    );
}

export default Absence;