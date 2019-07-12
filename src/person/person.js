import  React,{Component}  from 'react';
import './person.css';

class Person extends Component {
           render(){
            return (<div className='person col-md-3'>
                <p>name is {this.props.name}</p>
                <p>age is {this.props.age}</p>
                <button className="btn btn-sm btn-info" onClick={this.props.updateClick}>Update Person</button>
                &nbsp;&nbsp;
                <button className="btn btn-sm btn-danger" onClick={this.props.deleteClick}>Delete Person</button>
                </div>);
           };
            
    
}

export default Person