import "./style.css";
import {useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/**
 * Este componente es de ejemplo y solo sirve para marcar sitios en el layout.
 */
export const Filter = ({category, setCategory}) => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("/products/categories")
            .then((response) => response.json())
            .then((response) => setCategories(response))
    },[])

    

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          {
            categories?.map((category) => <MenuItem key={category} value={category}>{category}</MenuItem>)
          }
        </Select>
      </FormControl>
    )
}