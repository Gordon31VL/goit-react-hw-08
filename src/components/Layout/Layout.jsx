import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

export default function Layout({ children }) {
    return (
        <>
            <AppBar />
            <main>
                {children}
                <Outlet />
            </main>
        </>
    );
}