import { createTheme } from '@material-ui/core/styles';


const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const theme = createTheme({
palette:{
    common:{
        blue:`${arcBlue}`,
        orange:`${arcOrange}`,
    },
    primary:{
        main:`${arcBlue}`
    },
    secondary:{
        main:`${arcOrange}`
    }
},
overrides:{
    MuiInputLabel:{
        root:{
            color:arcBlue,
            fontSize:"1rem"
        }
    },
    MuiInput:{
        underline:{
            "&:before":{
               borderBottom:`2px solid ${arcBlue}` 
            }
        }
    }
}
});

export default theme