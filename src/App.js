import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import BorderContainer from './Components/BorderContainer/BorderContainer';
import Header from './Components/Header/Header';
import Home from './Screens/Home/Home';
import Footer from './Components/Footer/Footer';
import AboutAsml from './Screens/Company/AboutAsml/AboutAsml';
import AsmlFoundation from './Screens/Company/AsmlFoundation/AsmlFoundation';
import Careers from './Screens/Careers/Careers/Careers';
import FindYourJob from './Screens/Careers/FindYourJob/FindYourJob';
import WorkingAtAsml from './Screens/Careers/WorkingAtAsml/WorkingAtAsml';
import Technology from './Screens/Technology/Technology/Technology';
import MicrochipBasics from './Screens/Technology/MicrochipBasics/MicrochipBasics';
import Investors from './Screens/Investors/Investors';
import History from './Screens/Company/History/History';
import AllAboutMicrochips from './Screens/Technology/AllAboutMicrochips/AllAboutMicrochips';
import Software from './Screens/Technology/Software/Software';
import Products from './Screens/Products/Products/Products';
import News from './Screens/News/News';
import CustomerNet from './Screens/Products/CustomerNet/CustomerNet';
import Company from './Screens/Company/Company/Company';
import SavedJobs from './Screens/SavedJobs/SavedJobs';

function App() {
	return (
		<div className="app">
			<header>
				<Header />
			</header>
			<BorderContainer />
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />

					{/*Company*/}
					<Route exact path="/company" element={<Company />} />
					<Route exact path="/company/about-asml" element={<AboutAsml />} />
					<Route
						exact
						path="/company/about-asml/history"
						element={<History />}
					/>
					<Route
						exact
						path="/company/asml-foundation"
						element={<AsmlFoundation />}
					/>
					{/*Careers*/}
					<Route path="/careers" element={<Careers />} />
					<Route path="/careers/find-your-job" element={<FindYourJob />} />
					<Route path="/careers/working-at-asml" element={<WorkingAtAsml />} />
					<Route path="/saved-jobs" element={<SavedJobs />} />

					{/*technology */}
					<Route path="/technology" element={<Technology />} />
					<Route
						path="/technology/all-about-microchips"
						element={<AllAboutMicrochips />}
					/>
					<Route
						path="/technology/all-about-microchips/microchip-basics"
						element={<MicrochipBasics />}
					/>
					<Route path="/technology/software" element={<Software />} />

					{/*Products Screen */}
					<Route path="/products" element={<Products />} />
					<Route path="/products/customernet" element={<CustomerNet />} />

					{/*News*/}
					<Route path="/news" element={<News />} />
					{/*Investors*/}
					<Route path="/investors" element={<Investors />} />
				</Routes>
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
