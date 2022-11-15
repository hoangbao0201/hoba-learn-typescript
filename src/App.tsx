import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/layouts/Header/Header";
import publicRouter from "./routes";

interface RouteProps {
    component: JSX.Element;
}

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
            </div>
        </Router>
    );
}

export default App;
