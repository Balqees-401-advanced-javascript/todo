import React, { useState , useContext} from 'react';
import { Card} from 'react-bootstrap';
import Auth from '../../components/auth/auth';
import { SettingsContext } from '../../context/site.js';
import { LoginContext } from '../auth/context';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList(props) {
  const siteContext = useContext(SettingsContext);
  const loginContext = useContext(LoginContext);
  const [btnIndex, setbtnIndex] = useState(0);


  //  setButton(siteContext.pageNum);


  return (
    <ul>
      {props.list.slice(btnIndex * siteContext.pageNum, btnIndex * siteContext.pageNum + siteContext.pageNum)
      .map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Card style={{ width: '22rem' }}>
            <Card.Body>
              <div className="topname">
                
                <h3 onClick={
                    loginContext.user.capabilities.includes('update') ? 
                    () => props.handleComplete(item._id)
                    : null }>                  
                    {`${item.complete ? 'complete' : 'pending'}`}
                    
                    </h3>
              
                <Card.Title className='name' variant='border-bottom border-dark'>
                  {item.assignee}
                </Card.Title>
                <Auth capability="delete">
                <button className="xButton" onClick={() => props.deleteNote(item._id)}>x</button>
                </Auth>
              </div>


              <div className='contentInformation' >  {item.text} </div>
              <div className='diff'> Difficulty : {item.difficulty}</div>


            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  );

}

export default TodoList;
