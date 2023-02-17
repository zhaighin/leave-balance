import { Table, Button } from 'antd';
import { employees } from '../dummyfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './summary.css';

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
  }, {
    title: 'Annual Leave Balance',
    dataIndex: 'annualLeave',
    key: 'annualLeave'
  },
  {
    title: 'Sick Leave Balance',
    dataIndex: 'sickLeave',
    key: 'sickLeave'
  }
]

const Summary = () => {
  return (
    <>
      <div className='summary-header'>
        <h2>Leave Balance</h2>
        <div>
          <Link to={'/leave'}>
            <Button className='summary-btn' type='primary' href={'/leave'}>Apply for leave</Button>
          </Link>
          <Button className='summary-btn' icon={<FontAwesomeIcon icon={faDownload} />}>Download CSV</Button>
        </div>
      </div>
      <Table columns={columns} dataSource={employees} size='small'></Table>
    </>
  );
}

export default Summary;
