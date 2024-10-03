import '../App.css'
import { Outlet } from "react-router-dom"
import Header from '../Components/Header/Header';

export default function Base() {
    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
        </>
    )
}