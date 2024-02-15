// React
import { useContext } from 'react';
// context
import { AuthContext } from '../Context/AuthContext';
// components
import LogInScreen from "../Screens/LogIn"
import HomeScreen from "../Screens/Home"

export default function AppNavigation() {
    const {UserToken} = useContext(AuthContext)

    if (UserToken != null) {
        return (
            <HomeScreen />
        )
    } else {
        return (
            <LogInScreen />
        )
    }

    
}