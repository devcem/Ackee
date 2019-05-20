import { createElement as h, Fragment } from 'react'

import { MODALS_DOMAIN_EDIT } from '../constants/modals'

import Modal from './modals/Modal'
import ModalDomainEdit from './modals/ModalDomainEdit'

const Message = (props) => {

	const modals = Object.keys(props.modals.value).map((modalId) => {

		const modal = props.modals.value[modalId]
		const closeModal = props.removeModalsModal.bind(null, modalId)

		return h(Modal, { key: modalId, visible: modal.visible },
			modal.type === MODALS_DOMAIN_EDIT && h(ModalDomainEdit, {
				id: modal.props.id,
				title: modal.props.title,
				fetching: props.domains.fetching,
				updateDomain: props.updateDomain.bind(null, props),
				deleteDomain: props.deleteDomain.bind(null, props),
				closeModal
			})
		)

	})

	return (
		h(Fragment, {}, ...modals)
	)

}

export default Message