import React from 'react';
import './ShellLog.css';

export function ShellLog(props: any) {
  React.useEffect(()=>{
    console.log(props.result)
  },[props.result])
  return (
    <div className="shell-log">
      {props.result.map((item: any, index: number) => (
        <p key={index} className={item.type === 'error' ? 'error' : ''}>
          {item.data}
        </p>
      ))}
    </div>
  );
}
