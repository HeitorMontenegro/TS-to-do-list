import * as C from './styles'
import {Item} from '../../types/Item'
import { FiTrash } from 'react-icons/fi';

type Props = {
   item: Item;
   deleting: (ID: number) => void;
   onChange: (ID: number, DONE: boolean) => void;
}

export const ListItem = ({item, deleting, onChange}:Props) => {
   return(
      <C.Container>
         <input type="checkbox"
         checked={item.isDone}
         onChange={e => onChange(item.id, e.target.checked)}
         /> 
         {item.name} - {item.isDone.toString()}
         <button onClick={() => deleting(item.id)}>
        <FiTrash/>    
        </button>
      </C.Container>
   );
   }
   
   
