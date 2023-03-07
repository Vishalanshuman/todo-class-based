import React,{Component} from "react";
import { Navbar } from "./components/Navbar";
import { ToDoRows } from "./components/ToDoRows";


export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      userName:"Vshal",
      todoItems: [
        {action:"Buy Milk", done:true},
        {action:"Dentist at 5pm", done:false},
        {action:"Go To Gym", done:false},
      ],
      newTodo:"",
    };
  }
  updateValue = (event) =>{
    this.setState({newTodo: event.target.value})
  }

  newTodo = () => {
    this.setState({
      todoItems:[
        ...this.state.todoItems,
        {action:this.state.newTodo, done:false}
      ]
    })
  }
  toggleDone = (todo) =>
      this.setState({
        todoItems: this.state.todoItems.map((item) => 
          item.action === todo.action ? {...item,done: !item.done} : item
        ),
      });
  todoRows = () => this.state.todoItems.map((item)=>
  <ToDoRows key={item.action} item={item} callback={this.toggleDone} />);

  // changeStateData=()=>{
  //   this.setState({
  //     userName: this.state.userName === "Vshal" ? "Mandan" : "Vshal",
  //   });
  // }
  render=()=>(
    <div className="container">
      <div className="row">
        <Navbar name={this.state.userName}/>

        <div className="col-12">
          <input className="form-control" value={this.state.newTodo}
          onChange={this.updateValue} />

          <button onClick={this.newTodo} className="btn btn-primary"> Add</button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>

          </table>

        </div>
      </div>
      {/* <button
       className="btn btn-secondary m2" 
       onClick={this.changeStateData}
       >
        change
      </button> */}
    </div>

  )
}