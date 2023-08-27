import { MainPage } from "../views/MainPage/MainPage";

export default function GenderMainPage({ params }) {
    console.log(params);
    return <MainPage gender={params.gender} />;
}
