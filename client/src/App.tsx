import { FC, useState } from 'react';
import { LoggedInRoutes, LoggedOutRoutes } from './routes';

const App: FC = () => {
  const [user, setUser] = useState<boolean>(false);
  
  return (
    <div>
      {user ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </div>
  );
}

export default App;
