import React from 'react';

const Index = ({history}) => {
  return <div><div>detail</div>
  <div onClick={() => history.push('/')}>返回</div></div>;
}
export default Index;