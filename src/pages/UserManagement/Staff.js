import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(({ loading }) => ({
  // list,
  loading: loading.models.list,
}))
class OrdinaryUser extends PureComponent {
  render() {
    return <div>OrdinaryUser</div>;
  }
}
export default OrdinaryUser;
