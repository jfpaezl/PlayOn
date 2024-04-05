import { useState } from 'react';
import styled from 'styled-components';

export default function PutuationBarra() {
    const [value, setValue] = useState(0);

    return (
        <PutuationBarraCss>
            <div className="puntuation">
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    aria-label='puntuation barra'
                />
                <span>{value}</span>
            </div>
        </PutuationBarraCss>
    );
}

const PutuationBarraCss = styled.div`
    .puntuation {
        display: flex;
        align-items: center;

        input[type="range"] {
            flex-grow: 1;
            margin-right: 10px;
        }
        input[type="range" i]{
            cursor: pointer;
            width: 100%;
            height: 5px;
            border-radius: 5px;
            outline: none;
            background-color: var(--color-icons);
            -webkit-appearance: none;
        }
    }
`;