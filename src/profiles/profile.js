import { DatePicker, Form, Input, Select, Button } from 'antd';
import { Link } from 'react-router-dom';
import './profiles.css';


const Profile = () => {

  const employmentType = [
    {
      value: 'fulltime',
      label: 'Full-time'
    }, {
      value: 'parttime',
      label: 'Part-time'
    }
  ]

  const branchName = [
    {
      value: 'gt2',
      label: 'Golden Triangle 2'
    }, {
      value: 'allseason',
      label: 'All Season'
    },
    {
      value: 'gurney',
      label: 'Gurney Plaze'
    }
  ]

  return (
    <>
      <h2>Employee Profile</h2>
      <Form name="basic" layout="vertical">
        <Form.Item label="Employee Name" name="employeename">
          <Input />
        </Form.Item>
        <Form.Item label="Hired Date" name="date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Employment Type" name="employementtype">
          <Select
            options={employmentType}
          />
        </Form.Item>
        <Form.Item label="Branch" name="branch">
          <Select
            options={branchName}
          />
        </Form.Item>
      </Form>
      <Link to={'/profiles'}>
        <div className='employee-details-button'>
          <Button type="primary">Save</Button>
          <Button>Cancel</Button>
        </div>
      </Link>
    </>
  );
}

export default Profile;
