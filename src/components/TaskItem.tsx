import React from 'react';
import { List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../graphQL/mutations';

interface TaskItemProps {
  id: string;
  name: string;
  refreshTaskList: () => void;
}

const TaskItem = ({ id, name, refreshTaskList }: TaskItemProps) => {
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
