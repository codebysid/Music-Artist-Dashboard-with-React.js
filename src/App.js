import './App.css';
import SideNav from './component/SideNav.jsx'
import { grey,green,lime } from '@mui/material/colors';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Profile } from './component/Profile';

const theme=createTheme({
  palette:{
    primary:{
      main:grey[500]
    },
    secondary:{
      main:green[500]
    },
    info:{
      main:lime[500]
    },
    success:{
      main:grey[50]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Profile/>
        <SideNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
