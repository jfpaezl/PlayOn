import PropTypes from 'prop-types';
import {styled} from 'styled-components'

interface ModalProps {
    children: JSX.Element;
    onClick: () => void;
}

export default function Modal({children, onClick}: ModalProps) {
    return (
        <ModalCss >
            <div className='contentModal'>
                {children}
            </div>
            <div className='close' onClick={onClick}></div>
        </ModalCss>
    )
}

Modal.prototype = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired
}

const ModalCss = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--box-shadow-cards1);
    display: flex;
    justify-content: center;
    align-items: center;
    .close{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
    }
    .contentModal{
        position: relative;
        background: var(--color-background);
        width: 100%;
        height: 100%;
        max-height: 350px;
        max-width: 700px;
        border-radius: 10px;
        padding: 1rem;
        overflow: hidden;
        z-index: 11;
    }

`