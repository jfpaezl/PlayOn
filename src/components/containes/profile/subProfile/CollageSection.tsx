import Button from "../../../pure/Button";
import { CiCreditCard1 } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CollageSectionCss } from "./CollageSection.style";
import { MdOutlineDownload } from "react-icons/md";
import { FaHeart, FaBookmark  } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs";
import { SiAudacity } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";

const collageSection = [
    {
        icon: <CiCreditCard1 className="icon"/>,
        title: "gestión de suscripciones",
    },
    {
        icon: <IoMdNotificationsOutline className="icon"/>,
        title: "Notificaciones",
    },
    {
        icon: <MdOutlineDownload className="icon"/>,
        title: "Descargas",
    },
    {
        icon: <FaBookmark className="icon"/>,
        title: "Lista de reproducción",
    },
    {
        icon: <FaHeart className="icon"/>,
        title: "Me gusta",
    },
    {
        icon: <BsDisplay className="icon"/>,
        title: "Conexiones de dispositivos",
    },
    {
        icon: <SiAudacity className="icon"/>,
        title: "Necesitas ayuda?",
    },
    {
        icon: <IoSettingsOutline className="icon"/>,
        title: "Configuración de la cuenta",
    }
]

export default function CollageSection() {
    return (
        <CollageSectionCss>
            <header className="header">
                <strong>Juan Felipe Paez</strong>
            </header>
            <div className="contendButtons">
                {collageSection.map((item, index) => (
                    <Button key={index}>
                        <div className="contentDiv">
                            {item.icon}
                            <p>{item.title}</p>
                        </div>
                    </Button>
                ))}
            </div>
        </CollageSectionCss>
    );
}