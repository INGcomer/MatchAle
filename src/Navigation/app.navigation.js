// React
import { useContext } from 'react';
// context
import { AuthContext } from '../Context/AuthContext';
// stacks
import LogInStack from './Stacks/LogInStack';
import HomeStack from './Stacks/HomeStack';

export default function AppNavigation() {
    const {UserToken} = useContext(AuthContext)

    if (UserToken != null) {
        return (
            <HomeStack/>
        )
    } else {
        return (
            <LogInStack/>
        )
    }

    
}