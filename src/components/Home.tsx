import { useAuth0 } from '@auth0/auth0-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { LOAD_TASKS } from '../graphQL/queries';
import { CREATE_TASK } from '../graphQL/mutations';

const Home = () => {
  const { error, loading, data } = useQuery(LOAD_TASKS);
  const [createTask] = useMutation(CREATE_TASK);
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (data) {
      setTasks(data.tasks);
    }
  }, [data]);
  return (
    isAuthenticated &&
    !loading &&
    !error && (
      <>
        <div>
          <h1>JSON</h1>
          <pre>{JSON.stringify(tasks, null, 2)}</pre>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              onClick={() =>
                // eslint-disable-next-line implicit-arrow-linebreak
                createTask({
                  variables: { name },
                })
              }
            >
              Create Task
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default Home;
