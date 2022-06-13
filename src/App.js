import { Route , Routes} from 'react-router-dom'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'


import './App.css';
import Favorites from './Pages/Favourites';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovieDetails';
import NotFound from './Pages/NotFound';





function App() {
	return (
		<div className="App">
			<Routes>
				<Route path={"/"} exact element={<Movies/>} ></Route>
				<Route path={"/Favorite"} element={<Favorites/>} ></Route>
				<Route path={"/MovieDetails/:id"}  element={<MovieDetails/>} ></Route>
				<Route path={'*'}  element={<NotFound/>} ></Route>
			</Routes>
		
		</div>
	);
}

export default App;
