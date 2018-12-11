import { createMuiTheme } from '@material-ui/core';
import { orange, red, blue } from '@material-ui/core/colors/'

export default createMuiTheme({
    palette:{
        primary: orange,
        secondary: blue,
        error: red,
        // type: 'dark',
    },
    typography:{
        useNextVariants:true
    }
})