import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <Switch>
                        {/* đường dẫn http://localhost:3000/login thì vào component Login */}
                        <Route component={Login} path="/login" />
                        {/* đường dẫn  http://localhost:3000/ thì vào component Chatroom */}
                        <Route component={ChatRoom} path="/" />
                    </Switch>
                    <AddRoomModal />
                    <InviteMemberModal />
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
