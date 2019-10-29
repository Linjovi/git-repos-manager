import React from 'react';
import SelectContext from '@/components/selectContext';
import io from 'socket.io-client';
// import * as path from 'path';
import { Input, Modal, Button, message } from 'antd';
import './Operator.css';
import * as actionCreators from '@/store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { ShellLog } from './ShellLog';

const { Search } = Input;
var socket: any;
// const socket = io('http://localhost:4000');

export function Operator() {
  const list = React.useContext(SelectContext);
  const [result, setResult] = React.useState([{ type: '', data: '' }]);
  const [current, setCurrent] = React.useState('');
  const [step, setStep] = React.useState(0);
  const _repos = useSelector((state: any) => state._repos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    socket = io('http://localhost:4000');
    socket.on('connect', function() {
      console.log('connected');
    });
    socket.on('out', (data: any) => {
      setResult(prevResult => prevResult.concat({ type: 'out', data }));
    });
    socket.on('err', (data: any) => {
      setResult(prevResult => prevResult.concat({ type: 'error', data }));
    });
    socket.on('close', (data: any) => {
      setResult(prevResult => prevResult.concat({ type: 'close', data: '' }));
    });
    socket.on('disconnect', function() {
      console.log('Disconnected');
    });
    return () => {
      socket.close();
    };
  }, []);

  React.useEffect(() => {
    let data = result[result.length - 1];
    if (!data) {
      return;
    }
    // data.data = data.data.replace(/\n/g, '');
    // console.log(step);
    // console.log(data.data);
    // const begin = /^\/(.*):$/;
    const end = /^\/(.*)\s✓/;
    if (data.type === 'error') {
      return;
    } else {
      if (end.test(data.data)) {
        //success
        const currentPath = data.data.split('✓')[0].split(/\//g);
        const current = currentPath[currentPath.length-1].replace(' ', '');
        dispatch(
          actionCreators.getStatus({ name: current, status: 'success' }),
        );
      }
    }
  }, [result]);

  const run = (repos: string[], opera: string) => {
    if (repos.length === 0) {
      message.warning('No repos are selected');
      return;
    }
    if (!opera.includes('git')) {
      message.warning('Only git command can be used');
      return;
    }
    setResult([]);
    setStep(0);
    let newList = _repos.map((item: any) => {
      item.status = null;
      return item;
    });
    dispatch(actionCreators.getRepos(newList));
    socket.emit('operator', { repos, opera }, (response: any) =>
      console.log('Operator:', response),
    );
  };

  const [visible, setVisible] = React.useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = (e: any) => {
    setVisible(false);
  };

  const handleCancel = (e: any) => {
    setVisible(false);
  };

  return (
    <div>
      <Search
        enterButton="运行"
        onSearch={value => run(list, value)}
        style={{ width: 300 }}
      />
      <Button onClick={showModal}>shell log</Button>
      <Modal
        title="Shell Log"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="operator-model"
      >
        <ShellLog result={result} />
      </Modal>
    </div>
  );
}
