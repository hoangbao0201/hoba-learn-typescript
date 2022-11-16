import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Footer } from "./components/layouts/Footer/Footer";
import { Header } from "./components/layouts/Header/Header";
import publicRouter from "./routes";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    {publicRouter.map((route: any, index: number) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
