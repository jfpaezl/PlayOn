import { MainWrapper } from "./Main.style";

import ListButtons from "./subMain/ListButtons";
import ListContent from "./subMain/ListContent";
import Recomended from "./subMain/Recomendede";

import data2 from '../../../json/newLive.json'
import data from '../../../json/home/hero.json'
import recomended from '../../../json/home/recomended.json'
import NewLive from "../../pure/NewLive";

export default function Main() {
    return (
        <MainWrapper>
            <ListButtons />
            <ListContent listName="Movies" data={data} />
            <Recomended data={recomended}/>
            <ListContent listName="Movies Top" data={data} top={true}/>
            <NewLive url={data2.url} title={data2.name} />
        </MainWrapper>
    );
}