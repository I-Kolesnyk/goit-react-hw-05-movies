import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader';

const Layout = lazy(() => import('components/Layout'))
const HomePage = lazy(() => import('pages/Home'));
const MoviesPage = lazy(() => import('pages/Movies'));
const PageNotFound = lazy(() => import('pages/NotFound'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetails'));
const MovieCast = lazy(() => import('components/Cast'));
const MovieReviews = lazy(() => import('components/Reviews'));

const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:page" element={<HomePage />} />
        <Route path="/search" element={<MoviesPage />} />
        <Route path="/search/:query/:page" element={<MoviesPage />} />
        <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast/>}/>
          <Route path="reviews" element={<MovieReviews/>}/>
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </Suspense>
  );
};

export default App;
