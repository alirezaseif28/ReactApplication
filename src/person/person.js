import  React,{Component}  from 'react';
import './person.css';

class Person extends Component {
           render(){
            return (<div className='person'>
                <p>name is {this.props.name}</p>
                <p>age is {this.props.age}</p>
                </div>);
           };
            
    
}

export default Person