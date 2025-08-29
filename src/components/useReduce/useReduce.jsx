import { useReducer } from "react";

let initValues = {
  userCount: 0
}

function reducer(state, action) {
  switch(action.type){
    case "join":
      return {userCount: state.userCount+1}

    case "exit":
      return {userCount: state.userCount-1}
  }
}

export function ReducerDemo() {
  const [state,dispatch] = useReducer(reducer,initValues);

  function handelJoinClick() {
    dispatch({type:"join"});
  }

  function handelExitClick() {
    dispatch({type:"exit"});
  }

  return(
    <div>
      <h2>Live User[{state.userCount}]</h2>
      <iframe width="500" src="https://www.youtube.com/embed/m9xEHaSptDk" height="400"></iframe>

      <div className="mt-2">
        <button onClick={handelJoinClick} className="btn btn-primary bi bi-door-open">Join</button>
        <button onClick={handelExitClick} className="btn btn-warning mx-2 bi bi-door-closed ">Exit</button>
      </div>
    </div>
  )
}