/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { List, Space, Typography, Layout, FloatButton } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import {
  BulbOutlined,
  ExperimentOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { LOAD_TASKS } from '../graphQL/queries';
import LogoutButton from './LogoutButton';
import TaskItem from './TaskItem';
import Spinner from './Spinner';
import { ErrorFallback } from './ErrorFallback';
import AddTask from './AddTask';
import {
  headerStyle,
  contentStyle,
  footerStyle,
} from '../styles/TaskListStyles';

const TaskList = () => {
  // eslint-disable-next-line object-curly-newline
  const { error, loading, data, refetch } = useQuery(LOAD_TASKS);
  const [tasks, setTasks] = useState({});
  const { Header, Content } = Layout;
  const [isAddTaskModalVisible, setAddTaskModalVisible] = useState(false);

  const refreshTaskList = () => {
    refetch();
  };

  useEffect(() => {
    if (data) {
      setTasks(data.tasks);
    }
  }, [data, tasks]);

  return (
    <>
      {error && <ErrorFallback />}
      {!error && loading && <Spinner />}
      {!error && !loading && (
        <Layout>
          <Header style={headerStyle}>
            <Space
              align="center"
              direction="horizontal"
              style={{ justifyContent: 'space-between', display: 'flex' }}
            >
              <Typography.Title style={{ margin: '2rem 2rem 2rem 0' }}>
                Conscience.
              </Typography.Title>
              <LogoutButton />
            </Space>
          </Header>
          <Content style={contentStyle}>
            <List
              size="large"
              bordered
              dataSource={Array.prototype.slice.call(tasks)}
              renderItem={(item: any) => (
                <TaskItem
                  id={item.id}
                  name={item.name}
                  refreshTaskList={refreshTaskList}
                />
              )}
            />
          </Content>
          <Footer style={footerStyle}>
            <FloatButton.Group
              trigger="hover"
              type="primary"
              style={{ right: 24 }}
              icon={<ExperimentOutlined />}
            >
              <FloatButton icon={<BulbOutlined />} />
              <FloatButton
                icon={<PlusOutlined />}
                onClick={() => {
                  setAddTaskModalVisible(true);
                }}
              />
            </FloatButton.Group>
          </Footer>
          <AddTask
            isVisible={isAddTaskModalVisible}
            setVisible={setAddTaskModalVisible}
            refreshTaskList={refreshTaskList}
          />
        </Layout>
      )}
    </>
  );
};

export default TaskList;
