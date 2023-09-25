import TitleCard from "../TitleCard/TitleCard";
import style from "./ContentPage.module.css";

const ContentPage = () => {
	return (
		<div className={style.main}>
			<div className={style.container}>
				<button className={style.con_button}>{"Back"}</button>
			</div>
			<TitleCard/>
		</div>
	);
};

export default ContentPage;
