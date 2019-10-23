import React, {Component} from 'react';
import { Button, Input, Col } from 'antd';
import 'antd/dist/antd.css';

export default class FilterButton extends Component {

    displayAllActive = () =>{
        
    }

render()
{
    return(
    <div>
    <Button onClick={this.displayAllTodo}>Active</Button>
    <Button>Completed</Button>
    <Button>All</Button>
    </div>
    )
}

}