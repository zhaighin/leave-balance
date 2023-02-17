import './App.css';
import Main from './main';
import Absence from './absence';
<<<<<<< Updated upstream
import Profiles from './profiles';
import Summary from './summary';
=======
import { Profiles, Profile } from './profiles';
import Summary from './summary';

>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
      path: 'profile',
      element: <Profile />
    },{
>>>>>>> Stashed changes
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
