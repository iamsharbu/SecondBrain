/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../graphQL/mutations';

const TaskItem = ({ id, name, refreshTaskList }) => {
  const [deleteTask] = useMutation(DELETE_TASK);
  return (
    <List.Item>
      <div>{name}</div>
      <CheckCircleOutlined
        onClick={() => {
          deleteTask({ variables: { id } });
          refreshTaskList();
        }}
      />
    </List.Item>
  );
};

export default TaskItem;
