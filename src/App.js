import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    {/* đường dẫn http://localhost:3000/login thì vào component Login */}
                    <Route component={Login} path="/login" />
                    {/* đường dẫn  http://localhost:3000/ thì vào component Chatroom */}
                    <Route component={ChatRoom} path="/" />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
