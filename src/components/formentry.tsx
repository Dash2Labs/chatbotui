import { React } from './common_imports.js';
import { OutlinedInput, OutlinedInputProps, FormControl } from '@mui/material';
import './styles/formentry.css';

const FormEntry = (props: OutlinedInputProps) => (
    <form noValidate autoComplete='off' id="form-entry" >
        <FormControl className='input-group' sx={{marginBottom: "15px"}}>
            <OutlinedInput fullWidth multiline maxRows={2} minRows={1} margin='none' {...props} id="input-text-box"/>
        </FormControl>
    </form>
);

export default FormEntry;