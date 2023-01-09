import { Table } from 'antd';
import { employees } from '../dummyfile';

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
      <h2>Leave Balance</h2>
      <Table columns={columns} dataSource={employees} size="small"></Table>
    </>
  );
}

export default Summary;
