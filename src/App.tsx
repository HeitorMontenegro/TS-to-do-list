import {useState} from 'react'
import {Item} from './types/Item'
import * as C from './App.styles'
import {ListItem} from './components/ListItem'
import AddArea from './components/AddArea'

const App = () =>{

const [list, setList] = useState<Item[]>([])

const handleAdd = (taskName: String) =>{
  let newList = [...list];
  newList.push({
      name: taskName,
      id: list.length+1,
      isDone: false
    })
    setList(newList);
}

const handleDelete = (ID: number) =>{
  setList(list.filter((item) => item.id !== ID))
}

const handleStatus = (ID: number, DONE: boolean) =>{
let newList = [...list];
for (let i in newList){
  if(newList[i].id === ID) {
    newList[i].isDone = DONE;
  }
}
setList(newList);
}

  return(
  <C.Container>
    <C.Area>
      <C.Header>
        Typescript to do list
      </C.Header>


      <AddArea newToDo={handleAdd}/>


      {list.map((item, index) => (
        <ListItem item={item} key={index} onChange={handleStatus} deleting={handleDelete}/>        
      ))}

    </C.Area>
  </C.Container>
  );
}

export default App;