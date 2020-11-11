import React, {useState} from 'react'
 
import { languages } from '../../constants/const'
import ComboboxItem from './ComboboxItem'
import styles from './style.module.css' 
 
const Combobox = () => {
    const [selectedItem, setSelectedItem] = useState(
        languages.find(el => el.name === "eng"))
      const [open, setOpen] = useState(false)
    return (
        <div className={styles.combobox} onClick={() => setOpen(!open) }>
            {open &&
                <ul>
                    {languages.map(el => 
                    <ComboboxItem {...el}
                    setSelected={setSelectedItem} 
                    selected={el.name === selectedItem.name}
                    />)}
                </ul>
            }
            {selectedItem.language}
        </div>
    )
}

export default Combobox