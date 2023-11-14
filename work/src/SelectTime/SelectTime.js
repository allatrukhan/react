import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectTime() {

  const [kindOfLesson, setKindOfLesson] = React.useState('');

  const handleChange = (event) => {
    setKindOfLesson(event.target.value);
  };

  return (
    <Box sx={{ width: 256 }} border='none'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" >12:30-13:30</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
        //   label="Age"
          onChange={handleChange}
        >
          <MenuItem>Induvidual</MenuItem>
          <MenuItem>Group session</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}