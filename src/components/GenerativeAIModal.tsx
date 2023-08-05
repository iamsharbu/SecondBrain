import { Modal, Typography } from 'antd';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ASK_AI } from '../graphQL/queries';

const { Paragraph } = Typography;

interface GenerativeAIModalProps {
  isVisible: boolean;
  setVisible: (state: boolean) => void;
  tasks: any[]; // TODO
}

const GenerativeAIModal = ({
  isVisible,
  setVisible,
  tasks,
}: GenerativeAIModalProps) => {
  const [isLoading, setLoading] = useState(true);
  const { data } = useQuery(ASK_AI, {
    variables: { prompt: tasks?.map((task) => task.name)?.join(',') },
  });
  const handleCancel = () => {
    setVisible(false);
  };
  const getAIResponse = async () => {
    if (data) {
      setLoading(false);
    }
  };
  return (
    <Modal
      title="t5-base-end2end-chatbot-generative"
      open={isVisible}
      centered
      footer={false}
      onCancel={handleCancel}
      afterOpenChange={(isOpened) => isOpened && getAIResponse()}
    >
      {isLoading && (
        <Paragraph>
          <pre>loading...</pre>
        </Paragraph>
      )}
      {!isLoading && (
        <Paragraph>
          <pre>{data?.askAI?.response}</pre>
        </Paragraph>
      )}
    </Modal>
  );
};

export default GenerativeAIModal;
