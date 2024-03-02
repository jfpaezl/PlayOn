import Button1 from "../../../pure/Button1";

import { ListButtonsCss } from "./ListButtons style";
import { TbMovie } from "react-icons/tb";
import { BsCameraVideo } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";
import { MdScreenShare } from "react-icons/md";
import { FaHeart, FaBookmark  } from "react-icons/fa";

export default function ListButtons() {
    return (
        <ListButtonsCss>
            <Button1 icon={<TbMovie className="icon"/>} url="">Movies</Button1>
            <Button1 icon={<BsCameraVideo className="icon"/>} url="">Series</Button1>
            <Button1 icon={<RiDeleteBin5Line className="icon"/>} url="">Cartoons</Button1>
            <Button1 icon={<GoStarFill className="icon"/>} url="">Top</Button1>
            <Button1 icon={<MdScreenShare className="icon"/>} url="">New</Button1>
            <Button1 icon={<FaHeart className="icon"/>} url="">Like</Button1>
            <Button1 icon={<FaBookmark className="icon"/>} url="">Looked</Button1>
        </ListButtonsCss>
    )

}