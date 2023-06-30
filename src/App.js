import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar            from './scenes/global/Topbar';
import Sidebar           from './scenes/global/Sidebar';
import Dashboard         from './scenes/dashboard/dashboard';
import Team              from './scenes/team/Team';
import Contacts          from './scenes/contacts/Contacts';
import Invoices          from './scenes/invoices/Invoices';
import Form              from './scenes/form/Form';
import Calendar          from './scenes/calendar/Calendar'
import FAQ               from './scenes/faq/FAQ';
import BarChart          from './scenes/charts/BarChart';
import PieChart          from './scenes/charts/PieChart';
import LineChart         from './scenes/charts/LineChart';
import GeographyChart    from './scenes/charts/GeographyChart';


const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app">
        <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/'           element={ <Dashboard /> } />
              <Route path='/team'       element={ <Team /> } />
              <Route path='/contacts'   element={ <Contacts /> } />
              <Route path='/invoices'   element={ <Invoices /> } />
              <Route path='/form'       element={ <Form /> } />
              <Route path='/calendar'   element={ <Calendar /> } />
              <Route path='/faq'        element={ <FAQ /> } />
              <Route path='/bar'        element={ <BarChart /> } />
              <Route path='/pie'        element={ <PieChart /> } />
              <Route path='/line'       element={ <LineChart /> } />
              <Route path='/geography'  element={ <GeographyChart /> } />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;