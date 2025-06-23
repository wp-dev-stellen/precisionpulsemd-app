import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function GuestLayout({ children }) {
    return (
        <>
        <Header />
        <main className="main-content">
                {children}
            </main>   
        <Footer />
        </>  
    );
}
