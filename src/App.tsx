import Navbar from './components/layout/navbar/navbar.component';
import Sidebar from './components/layout/sidebar/sidebar.component';
import ApplicationForm from './components/application-form/application-form.component';

import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <Sidebar />

            <main className="app-main">
                <ApplicationForm />
            </main>
        </>
    );
}

export default App;
