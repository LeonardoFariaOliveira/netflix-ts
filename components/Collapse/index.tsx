import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';
import { fontSize } from '@mui/system';
import { ArrowDownward } from '@mui/icons-material';



export interface CollapseItemProps{

    keyId:string
    textButton:string
    textCollapse:string


}

export default function CollapseItem({keyId, textButton, textCollapse}:CollapseItemProps) {

  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
    <Box className='flex flex-col items-center mb-4'>
        <div
        className='max-w-8xl w-full text-left justify-between flex flex-row p-4 md:text-[1.6rem] text-[1rem] cursor-pointer ' 
        onClick={handleChange}>
            {textButton}
            <ArrowDownward
            className='md:mt-2 md:w-8 w-5'
            />
        </div>
        <div className='max-w-8xl w-full text-left text-[0.8rem] md:text-[1rem]'>
          <Collapse in={open}>{textCollapse}</Collapse>
        </div>
    </Box>

    </>
  );
}
