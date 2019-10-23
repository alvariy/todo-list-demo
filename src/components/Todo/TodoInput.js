import React, {Component} from 'react';
import { Button, Input, Col } from 'antd';
import 'antd/dist/antd.css';

export default class TodoInput extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state.inputValue);
    this.setState({inputValue: ''})
  };

  render() {
    return (
      <div>
          <Col span={21}>
        <Input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        </Col>
        <Button onClick={this.dispatch}>Add Item</Button>
      </div>
    )
  }
}
