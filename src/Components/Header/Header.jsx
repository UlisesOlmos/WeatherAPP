import "./Header.css";
import { SearchBar } from "..";
import { useLocation } from "../../Contexts/LocationContext";
import { useTheme } from "../../Contexts/ThemeContext";
import {
	RiMoonLine,
	RiSunLine,
	RiSearchLine,
	RiCloseFill,
} from "react-icons/ri";
import { useEffect, useState } from "react";

const Header = () => {
	const { location } = useLocation();
	const { changeTheme, theme } = useTheme();
	const themesIcons = { light: <RiSunLine />, dark: <RiMoonLine /> };

	const [pageWidth, setPageWidth] = useState(window.innerWidth);
	const [searchModal, setSearchModal] = useState(false);

	window.addEventListener("resize", () => setPageWidth(window.innerWidth));

    useEffect(()=>{
        setSearchModal(false)
    },[location])

	return (
		<>
			<header className="header">
				<a href="/" className="logo">
					Weather
				</a>
				{!location ? null : pageWidth <= 650 ? (
					<button className="search__btn" onClick={() => setSearchModal(true)}>
						<RiSearchLine />
					</button>
				) : (
					<SearchBar />
				)}
				<button onClick={() => changeTheme()} className="theme__btn">
					{themesIcons[theme]}
				</button>
			</header>

			{!searchModal || pageWidth > 650 ? null : (
				<div className="modal__background">
					<div className="modal__search">
						<button className="modal__close" onClick={()=> setSearchModal(false)}>
							<RiCloseFill />
						</button>
						<SearchBar />
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
