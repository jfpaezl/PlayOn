import ButtonApps from "../../pure/ButtonApps";
import { PlayDetailCss } from "./PlayDetail.style";
import { MdOutlineDownload } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaHeart, FaBookmark, FaPlay } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../pure/Modal";
import Youtube from "../../pure/Youtube";
import PutuationBarra from "../../pure/PutuationBarra";


export default function PlayDetail() {
    const [heart, setHeart] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const handleHeart = () => {
        setHeart(!heart)
    }
    const handleBookmark = () => {
        setBookmark(!bookmark)
        console.log(bookmark);

    }

    return (
        <PlayDetailCss>
            <section className="contentDetail">
                <div className="details">
                    <h2>strenger things</h2>
                    <div className="span">
                        <span className="puntuation">8.5</span>
                        <span>Acción</span>
                        <span>2017</span>
                        <span>16+</span>
                        <MdOutlineDownload />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam voluptatum nemo blanditiis iusto, recusandae in laboriosam ab dignissimos quam quis laborum explicabo tempore doloremque? Quis sequi itaque exercitationem enim.
                    </p>
                    <p><strong>Director:</strong> Cualquier persona</p>
                    <div className="contentButtons">
                        <ButtonApps icon={<AiOutlinePlayCircle className="trailer" />} onClick={openModal}>
                            <p className="trailer">Trailer</p>
                        </ButtonApps>

                        <div className="icons">
                            <FaHeart className={heart ? "icon select" : "icon"} onClick={handleHeart} />
                            <FaBookmark className={bookmark ? "icon select" : "icon"} onClick={handleBookmark} />
                        </div>
                    </div>
                    <span>califica el contenido</span>
                    <PutuationBarra />
                </div>
                <div className="fondo" style={{ backgroundImage: "url(https://valenciaplaza.com/public/Image/2016/12/culturplaza_66_01_NoticiaAmpliada.jpg)" }}>
                    <div className="contentPlay"><FaPlay className="iconPlay" /></div>
                </div>
                <div className={modalIsOpen ? "show" : "hidden"}>
                    <Modal onClick={openModal}>
                        <Youtube link="https://www.youtube.com/watch?v=azfKhDMIrZo&list=RD0J1hIERZ1yA&index=16" paused={!modalIsOpen} close={openModal} />
                    </Modal>
                </div>
            </section>
        </PlayDetailCss>
    )
}