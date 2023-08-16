import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { useAppDispatch } from './redux/hooks/hooks';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  const auth = getAuth();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      }else{
        dispatch(setLoading(false));
      }
    });
  }, []);

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
