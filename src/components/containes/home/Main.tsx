import { MainWrapper } from "./Main.style";

import ListButtons from "./subMain/ListButtons";
import ListContent from "./subMain/ListContent";

export default function Main() {
    return (
        <MainWrapper>
            <ListButtons />
            <ListContent listName="Movies" />
        </MainWrapper>
    );
}