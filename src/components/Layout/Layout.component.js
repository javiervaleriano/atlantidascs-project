import React, { useContext, useEffect } from "react";
import { useScrollBlock } from "../../shared/hooks/useScrollBlock.js";
// CONTEXT
import ContextoGlobal from "../../store/ContextoGlobal.js";
// COMPONENTS
import WhatsApp from "../Layout/WhatsApp.component.js";
import Modal from "../Modal.component.js";
import Footer from "./Footer.component";
import Header from "./Header.component";


function Layout({ visible, children }) {
	// CONSUME CONTEXT
	const { modalContent: ModalContent, modalIsOpen, setModalIsOpen } = useContext(ContextoGlobal);

	const [blockScroll, allowScroll] = useScrollBlock();

	// HANDLERS
	const closeModalHandler = ({ target }) => {
		let elmClicked = target;

		if (elmClicked.matches("div")) {
			if (!elmClicked.classList[0]) return;
		}

		if (elmClicked.matches("path")) elmClicked = target.parentElement.parentElement;
		if (elmClicked.matches("svg")) elmClicked = target.parentElement;

		(elmClicked.matches("div") || elmClicked.matches(".modal-close-btn")) && setModalIsOpen(false);
	};

	useEffect(() => {
		modalIsOpen
			? blockScroll()
			: allowScroll();
	}, [modalIsOpen, blockScroll, allowScroll]);

	return (
		<>
			<Header visible={visible} />
			{children}
			<WhatsApp />
			<Footer />
			{modalIsOpen && (
				<Modal closeModal={closeModalHandler} {...ModalContent().props}>
					<ModalContent />
				</Modal>
			)}
		</>
	);
}

export default Layout;
