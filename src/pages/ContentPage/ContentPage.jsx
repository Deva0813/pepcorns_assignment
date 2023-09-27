import ContentSection from "../../components/ContentSection/ContentSection";
import DetailBox from "../../components/DetailBox/DetailBox";
import TitleCard from "../../components/TitleCard/TitleCard";
import style from "./ContentPage.module.css";

const ContentPage = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <button className={style.con_button}>{"Back"}</button>
      </div>
      <TitleCard />
      {/* <DetailBox />
      <ContentSection /> */}
    </div>
  );
};

export default ContentPage;
