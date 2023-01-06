
import { DatePicker, Form, Input, Select, Card } from 'antd';

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
    return (
        <>
            <h2>Leave Details</h2>
            <Card size="small">
                Available Balance as of Today
            </Card>
            <Form name="basic" layout="vertical">
                <Form.Item label="Employee Name" name="employeename">
                    <Input />
                </Form.Item>
                <Form.Item label="Leave Dates" name="date">
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
            </Form>
        </>
    );
}

export default Absence;