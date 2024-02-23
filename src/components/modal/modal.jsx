import React from 'react'
import ReactDOM from "react-dom" 
import PropTypes from 'prop-types'
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.css';

const modalRoot = document.getElementById('modal');

const Modal = (props) => {

	const {title, onClose, children} = props;

	React.useEffect(() => {

		const closeModal = (e) => {

			if(e.key === 'Escape') {

				onClose();
			}
		}
		
		document.addEventListener('keydown', closeModal);

		return () => {
			
			document.removeEventListener('keydown', closeModal);
		}
	}, [onClose])

	const stopPropagation = e => {

		e.stopPropagation();
	}

	return ReactDOM.createPortal(
		(
			<ModalOverlay onClick={onClose}>
				<div className={style.modal} onClick={stopPropagation}>
					<div className={style.body}>
						<div className={style.header}>
							<div className={style.title}>
								{title && <p className="text text_type_main-large">{title}</p>}
							</div>
							<div className={style.close}>
								<CloseIcon type="primary" onClick={onClose} />
							</div>
						</div>
						{children}
					</div>
				</div>
			</ModalOverlay>
		),
		modalRoot
	)
}

Modal.propTypes = {

	title: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
}

export default Modal
