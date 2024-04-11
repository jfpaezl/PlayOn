import {styled} from 'styled-components'
import propTypes from 'prop-types'

interface SelectProps {
    className?: string;
    name: string;
    id?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    children: React.ReactNode;
}
export default function Select({className, name, id, onChange, value, children}: SelectProps) {
    return (
        <Selectss 
            className={className}
            name={name}
            id={id}
            onChange={onChange}
            value={value}
            >
            {children}
        </Selectss>
    )
}

Select.propTypes = {
    className: propTypes.string,
    name: propTypes.string.isRequired,
    id: propTypes.string,
    onChange: propTypes.func,
    value: propTypes.string.isRequired,
    children: propTypes.node.isRequired
}

export const Selectss = styled.select`
    appearance: none; /* Restablecer el diseño por defecto */
    width: 100%;
    padding: 10px 20px;
    border-radius: 0.5rem;
    color: var(--color-text);
    font-weight: bold;
    border: none;
    background: var(--backgroud-selected);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3Cpath d="M7 10l5 5 5-5z"/%3E%3C/svg%3E'); /* Agregar la imagen de flecha */
    background-repeat: no-repeat;
    background-position: right center;
    border: 1px solid transparent;
    cursor: pointer;
    &:focus{
        outline: none;
        border: 1px solid var(--box-shadow-inputs);
        box-shadow: 0 0 10px 2px var(--box-shadow-inputs);
    }
    option {
        /* Cambia el color del texto en los elementos option */
        color: var(--color-text);
        border: none;
        background: var(--backgroud-selected);       
    }
    
    
`