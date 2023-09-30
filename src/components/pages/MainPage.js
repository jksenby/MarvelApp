import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import CharSearchForm from "../charSearchForm/CharSearchForm";

import { useState } from "react";

import decoration from "../../resources/img/vision.png";

const MainPage = () => {
  const [selectedChar, setCharacter] = useState(null);

  const onCharSelected = (id) => {
    setCharacter(id);
  };

  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm />
          </ErrorBoundary>
        </div>
      </div>
      {/* <img className="bg-decoration" src={decoration} alt="vision" /> */}
    </>
  );
};

export default MainPage;
