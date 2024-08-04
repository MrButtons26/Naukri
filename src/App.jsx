//all the third party and ad-hoc imports for the functioning of the app

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Search from "./pages/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BookMark from "./pages/BookMark";
import PageNotFound from "./pages/PageNotFound";

//query modulator for tanstack query
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 60 * 10000,
  },
});
function App() {
  return (
    //All the routes that are required for the functioning of the app using react router Dom
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/src/:query" element={<Search />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
