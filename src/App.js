import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import IndexPage from './components/pages/IndexPage';
import AboutPage from './components/pages/AboutPage';
import FreeBookPage from './components/pages/FreeBookPage';
import BookDetailPage from "./components/pages/BookDetailPage";
import Social from "./components/ui/Social";
import Footer from "./components/ui/Footer";
import NotFound from "./components/pages/NotFound";
import SearchPage from "./components/pages/SearchPage";
import SearchBooksContextProvider from "./contexts/SearchBooksContext";
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchBooksContextProvider>
        <BookContextProvider>
        <Navbar />
        <div className="content-wrap">
          <Social />
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/freebook" component={FreeBookPage} />
            <Route path="/search/:keyword" component={SearchPage}/>
            <Route path="/books/:book_id" component={BookDetailPage}/>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        </BookContextProvider>
        </SearchBooksContextProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
