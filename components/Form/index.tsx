import Link from 'next/link'
import TextField from '@mui/material/TextField';
import { borderColor } from '@mui/system';

export default function Form() {

  return (
    <form className="bg-white max-w-[28.188rem] flex-1 justify-around items-center p-4 flex flex-col rounded-[0.275rem] ">
        <h1 className='text-[1.525rem]'>Cadastre-se já</h1>
        <TextField
            className='text-white border-white'
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="email"
            color='error'
            required
            sx={{
                color: "white",
                borderColor: "white"
              }}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          color='error'
          sx={{
            color: "white",
            borderColor: "white"
          }}
        />
        <Link 
        href={""}
        >
            <button>Enviar</button>
        </Link>
    </form>
  )
}