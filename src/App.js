import { useState } from "react";
import "./App.css"
import TodoFooter from "./Components/TodoFooter/TodoFooter";
import TodoList from "./Components/TodoList/TodoList";

const App = ()=>{

  const [InputText, setInputText] = useState("")

  const [todos, setArr ] = useState([
      {
        id : Math.random(),
        text : "Learn React",
        chekBox : false
      },
      {
        id : Math.random(),
        text : "Learn Js",
        chekBox : false
      },
      {
        id : Math.random(),
        text : "Learn Php",
        chekBox : false
      }
  ])

  const AddTodos = ()=>{
    if(InputText !== ""){
      setArr([
      ...todos,
      {
        id : Math.random(),
        text : InputText,
        chekBox : false
      }, 
    ])
    }
    setInputText("")
  }

  const  onCheck = (newTodoCheck)=>{
    setArr(todos.map((event)=>{
      if(event.id === newTodoCheck.id){
        return newTodoCheck; 
      }
      return event
    }));
  }

  return(
    <div className="App">
        <div className="App-itme">
            <div className="contianer">
              <form onClick={(e)=>e.preventDefault()}>
                <input
                  type="text"
                  value={InputText}
                  onChange={(e)=>setInputText(e.target.value)}
                />
                <button onClick={AddTodos}>Add</button>
              </form>
            </div>  
            
            <TodoList todos={todos} onCheck={onCheck} DeleteCard={(DeleteList)=>{
              setArr(
                todos.filter((event)=>event.id !== DeleteList.id)
              )
            }} />
            <TodoFooter todos={todos} DeletCheked={()=>{
              setArr(todos.filter((event) => !event.chekBox))
            }}/>
        </div>
    </div>
  )
}

export default App;