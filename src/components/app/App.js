import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import { Helmet } from "react-helmet";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Page404 = lazy(() => import("../pages/404")),
  MainPage = lazy(() => import("../pages/MainPage")),
  ComicsPage = lazy(() => import("../pages/ComicsPage")),
  SingleComicPage = lazy(() => import("../pages/singleComic/SingleComicPage")),
  SinglePage = lazy(() => import("../pages/SinglePage")),
  SingleCharacter = lazy(() =>
    import("../pages/singleCharacter/SingleCharacter")
  );

const App = () => {
  return (
    <Router>
      <div className="app">
        <Helmet>
          <meta name="description" content="Marvel information portal" />
          <title>Marvel information portal</title>
        </Helmet>
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/marvelapp" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route
                path="/comics/:id"
                element={
                  <SinglePage Component={SingleComicPage} dataType="comic" />
                }
              />
              <Route path="*" element={<Page404 />} />
              <Route
                path="/characters/:id"
                element={
                  <SinglePage
                    Component={SingleCharacter}
                    dataType="character"
                  />
                }
              />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
