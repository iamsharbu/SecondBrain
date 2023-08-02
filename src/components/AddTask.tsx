/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Button, Form, FormInstance, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useMutation } from '@apollo/client';
import { BulbOutlined } from '@ant-design/icons';
import { CREATE_TASK } from '../graphQL/mutations';

interface AddTaskProps {
  isVisible: boolean;
  setVisible: (state: boolean) => void;
  refreshTaskList: any;
}

const AddTask: React.FC<AddTaskProps> = ({
  isVisible,
  setVisible,
  refreshTaskList,
}) => {
  const [loading, setLoading] = useState(false);
  const [createTask] = useMutation(CREATE_TASK);
  const handleOk = (taskName) => {
    setLoading(true);
    createTask({
      variables: { name: taskName },
    })
      .then(() => {
        refreshTaskList();
        setLoading(false);
        setVisible(false);
      })
      .catch(() => {
        setLoading(false);
        setVisible(false);
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    const values = Form.useWatch([], form);

    React.useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
    }, [values]);

    return (
      <Button
        loading={loading}
        type="primary"
        htmlType="submit"
        disabled={!submittable}
        onClick={() => {
          handleOk(values.ideaContext);
        }}
      >
        Create
      </Button>
    );
  };

  const [form] = Form.useForm();

  return (
    <Modal
      centered
      open={isVisible}
      title="Add a thought"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        style={{ width: '100%' }}
      >
        <Form.Item
          name="ideaContext"
          label="Idea Context"
          rules={[{ required: true, max: 20 }]}
          style={{ width: '100%' }}
        >
          <Input
            size="large"
            placeholder="Write your thoughts..."
            prefix={<BulbOutlined />}
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item name="moreInfo" label="More Info">
          <TextArea />
        </Form.Item>
        <SubmitButton form={form} />
      </Form>
    </Modal>
  );
};

export default AddTask;
