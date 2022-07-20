import React from 'react';
import 'antd/dist/antd.min.css';
import { Table} from 'antd';
import { listOption } from '../types';
import "../Assets/css/table.css";

type repositoryPropsType = {
list : listOption[],
loading: boolean
}

const RepositoryTable: React.FC<repositoryPropsType> = ({list, loading}) => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: listOption) => <a href={record.url} target="_blank" rel="noreferrer">{text}</a>
    },
    {
      title: 'Stars Count',
      dataIndex: 'stargazerCount',
      key: 'stargazerCount',
      render: (star: number) => <div>{star} 🌟</div>
    },
    {
      title: 'Forked Count',
      dataIndex: 'forkCount',
      key: 'forkCount',
    },
  ];
  return (
    <div><Table columns={columns} rowKey="title" dataSource={list} pagination={false} loading={loading} /></div>
  )
};

export default RepositoryTable