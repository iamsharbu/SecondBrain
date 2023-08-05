/* eslint-disable import/no-extraneous-dependencies */
import { Modal, Typography } from 'antd';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ASK_AI } from '../graphQL/queries';

const { Paragraph } = Typography;

const GenerativeAIModal: React.FC<any> = ({ isVisble, setVisible, tasks }) => {
  const [isLoading, setLoading] = useState(true);
  const { data } = useQuery(ASK_AI, {
    variables: { prompt: tasks.map((task) => task.name).join(',') },
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
      open={isVisble}
      centered={true}
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
          <pre>
            {JSON.stringify(data).substring(
              JSON.stringify(data).indexOf('startseq') + 8,
              JSON.stringify(data).lastIndexOf('endseq')
            )}
          </pre>
        </Paragraph>
      )}
    </Modal>
  );
};

export default GenerativeAIModal;
