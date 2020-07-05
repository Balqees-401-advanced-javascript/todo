import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';


import './todo.scss';

function ToDo() {
 
  let [list, setlist] = useState([]);

 let addItem = (item) => {
  //  console.log(item);   
    item._id = Math.random();
    item.complete = false;
    setlist([...list, item]);
  };

 let toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let listt = list.map(listItem => listItem._id === item._id ? item : listItem);
      setlist([...listt]);
    }

  };

  useEffect(()=> {
    let list = [
          { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
          { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
          { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
          { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
          { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
        ];
        setlist(list);
}, []);

useEffect(() => {
  document.title = `TO DO LIST ${list.filter(item => !item.complete).length}`
}, [list]);

return (
      <>
      <main>
        <header>
          <h2 className='toDoHeader'>
          TO DO LIST ({list.filter(item => !item.complete).length})
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
        </main>
      </>
    );
  
}

export default ToDo;
