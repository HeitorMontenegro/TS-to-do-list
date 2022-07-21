import * as C from './styles'
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';


type Props = {
    newToDo: (taskName: string) => void;
}

const AddArea = ({newToDo}: Props) => {
const [inputText, setInputText] = useState('')

const AddNewToDo = () =>{
if (inputText !== ''){
    newToDo(inputText);
    setInputText('');
}
}

return(
    <C.Container>
        <input 
        type="text" 
        placeholder="Insert a new to do"
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
        />
        <button onClick={() => AddNewToDo()}>
        <AiOutlinePlus/>
        </button>
    
    </C.Container>
);
}

export default AddArea;