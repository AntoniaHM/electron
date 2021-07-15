import React from 'react';

const Index = ({history}) => {
  const boxList = ['detail', 'data', 'news']
  return <div>
    {boxList.map(item => <div key={item} onClick={() => history.push(item)}>
      {item}</div>)}
  </div>;
}
export default Index;