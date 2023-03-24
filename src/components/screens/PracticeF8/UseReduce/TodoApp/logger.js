function logger(reducer){
return (prevState, action)=>{
    console.log(action.type)
    console.log("prevState",prevState)
    console.log("action",action)
    const newState = reducer(prevState, action)
    console.log("nextState",prevState)
    return newState}
}
export default logger