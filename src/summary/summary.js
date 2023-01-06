import { Table } from 'antd';

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

const data = [
  {
    id: '1',
    name: 'John Brown',
    annualLeave: 2,
    sickLeave: 10
  },
  {
    id: '2',
    name: 'Jim Green',
    annualLeave: 5,
    sickLeave: 14
  },
  {
    id: '3',
    name: 'Joe Black',
    annualLeave: 10,
    sickLeave: 6
  }
]

const Summary = () => {
  return (
    <>
      <h2>Leave Balance</h2>
      <Table columns={columns} dataSource={data} size="small"></Table>
    </>
  );
}

export default Summary;
