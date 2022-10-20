import "./TodoList.css"

const TodoList = ({ todos, onCheck, DeleteCard})=>{
    return(
        <div className="App-Card">
        {todos.map((e,i)=>{
          return(
            <div key={i} className="App-Card-itme">
              <input type="checkbox" onChange={(event)=>onCheck({
                ...e,
                chekBox : event.target.checked
              })} 
              checked={e.chekBox}/>
              <h3>{e.text}</h3>
              <div className="Card-chlos"><button onClick={()=>DeleteCard(e)}>X</button></div>
            </div>
          )
        })}
      </div>
    )
}

export default TodoList;