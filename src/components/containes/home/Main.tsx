import { MainWrapper } from "./Main.style";

import ListButtons from "./subMain/ListButtons";
import ListContent from "./subMain/ListContent";
import Recomended from "./subMain/Recomendede";

import data from '../../../json/hero.json'

export default function Main() {
    return (
        <MainWrapper>
            <ListButtons />
            <ListContent listName="Movies" data={data}/>
            <Recomended />
        </MainWrapper>
    );
}