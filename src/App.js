import "./App.css";
import "./styles.css";
import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from "./components/Header";
import { ApplicationRoutes } from "./routes/ApplicationRoutes";
import { MoviesList } from "./components/MoviesList";
import { useDispatch, useSelector } from "react-redux";

function App() {

	//const cart = useSelector((state) => state.cart);
	//const dispatcher = useDispatch();

	return (
		<>
			<Header />
			<ApplicationRoutes />
			{/* <p>Favoritos ({cart.products.lenght})</p> */}
			{/* <MoviesList /> */}
		</>
	);
}

export default App;
