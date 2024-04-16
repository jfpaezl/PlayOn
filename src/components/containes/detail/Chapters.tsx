import { useState } from "react";
import Select from "../../pure/Select";
import { ChaptersCss } from "./Chapters.style";

export default function Chapters() {

    const [selectedSeason, setSelectedSeason] = useState("")

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSeason(event.target.value);
    };
    return (
        <ChaptersCss>
            <div className="selectCahpters">
                <h3>Capitulos</h3>
                <div>
                    <Select value={selectedSeason} name="temporadas" onChange={handleSelectChange}>
                        <option value="Temporada 1">Temporada 1</option>
                        <option value="Temporada 2">Temporada 2</option>
                        <option value="Temporada 2">Temporada 3</option>
                    </Select>
                </div>
            </div>
            <div className="contentChapters">

                <div 
                    className="chapters" 
                    style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg')`}}
                >
                    <h4>Capitulo 1</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className="chapters">
                    <h4>Capitulo 2</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className="chapters">
                    <h4>Capitulo 3</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className="chapters">
                    <h4>Capitulo 4</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className="chapters">
                    <h4>Capitulo 5</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className="chapters">
                    <h4>Capitulo 6</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className="chapters">
                    <h4>Capitulo 7</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className="chapters">
                    <h4>Capitulo 8</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
            </div>
        </ChaptersCss>
    );
}
