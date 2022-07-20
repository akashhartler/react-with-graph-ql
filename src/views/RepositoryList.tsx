import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import RepositoryTable from '../components/RepositoryTable';
import { getRepositories } from '../services/repositoryService';
import { repository } from '../types';
import "../Assets/css/layout.css";

const RepositoryList = () => {
  const [repoList, setRepoList] = useState([]);
  const [repoName, setRepoName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    repository('is:public');
  }, []);

  const repository = async (query: string) => {
    setLoading(true);
    const { edges } = await getRepositories(query);
    const modifiedList = edges.map((ele: repository) => ({ ...ele.node }))
    setRepoList(modifiedList);
    setLoading(false);
  };

  const onFinish = (values: any) => {
    const query = `is:public keyword:${repoName}`;
    repository(query);
    return false;
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="outerWrapper">
      <h2>List of public repositories</h2>
      <div className="searchWrapper">
          <Form
            name="search"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
              <Form.Item
                label=""
                name="search"
                rules={[{ required: true, message: 'Please input a valid search!' }]}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder='Search by repository name' value={repoName} onChange={(evt) => setRepoName(evt.target.value)} /> 
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 0, span: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
          </Form>
      </div>
      <RepositoryTable list={repoList} loading={loading} />
    </div>
  )
}

export default RepositoryList