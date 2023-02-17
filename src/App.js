import './App.css';
import Main from './main';
import Absence from './absence';
import { Profiles, Profile } from './profiles';
import { Summary, LeaveHistory } from './summary';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [{
      path: 'leave',
      element: <Absence />
    },
    {
      path: 'profiles',
      element: <Profiles />,
    }, {
      path: 'profile',
      element: <Profile />
    }, {
      path: '',
      element: <Summary />
    }, {
      path: 'leave-history',
      element: <LeaveHistory />
    }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
