import "./TodoFooter.css"



const TodoFooter = ({todos, DeletCheked})=>{

    const ChekedLength = todos.filter((event)=>event.chekBox).length

    return(
        <div className="App-Footer">
            <p>{ChekedLength}/{todos.length}</p>
            <button onClick={DeletCheked}>Delete</button>
        </div>
    )
}

export default TodoFooter;