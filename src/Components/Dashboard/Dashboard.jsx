import "./Dashboard.css";
import { Header, Main, SearchBar } from "..";
import { useLocation } from "../../Contexts/LocationContext";


const Dashboard = () => {

	const {location} = useLocation()

	return (
		<div className="dashboard">
            <Header />
			{!location ? 
			<>
				<div className="banner">
					<div className="banner__content">
						<p className="banner__text">What's the weather like today?</p>
						<SearchBar/>
					</div>
				</div>
			</>
			:
			<Main />
		}
		</div>
	);
};

export default Dashboard;
