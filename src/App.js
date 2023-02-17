import './App.css';
import Main from './main';
import Absence from './absence';
import { Profiles, Profile } from './profiles';
import Summary from './summary';
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
