import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import "./index.css";
const App = () => (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
);

export default App;
