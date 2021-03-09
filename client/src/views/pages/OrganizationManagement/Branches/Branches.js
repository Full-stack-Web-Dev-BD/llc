import React, { useState } from 'react'
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CJumbotron,
    CRow,

    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
} from '@coreui/react'
import BranchCreateForm from './BranchCreateForm'

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['BranchID', 'Name', 'Location', 'Phone1', 'Phone2', 'Email', 'Address', 'City', 'State', 'Country']


const Branches = () => {
    const [allBranch, setAllBranch] = useState([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12,])
    const [BranchCreateModal, setBranchCreateModal] = useState(false)
    return (
        <>
            <CJumbotron className="border">
                <h1 className="display-3">Branch Management </h1>
                <p className="lead">Manage Brancy  by Creat , Update ,Delete</p>
                <hr className="my-2" />
                <p className="lead">
                    <CModal
                        show={BranchCreateModal}
                        onClose={() => setBranchCreateModal(!BranchCreateModal)}
                        size="lg"
                    >
                        <CModalHeader closeButton>
                            <CModalTitle>Create Branch</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                            <BranchCreateForm />
                        </CModalBody>
                        <CModalFooter>
                            <CButton color="primary" onClick={() => setBranchCreateModal(!BranchCreateModal)} >Cancel</CButton>{' '}
                        </CModalFooter>
                    </CModal>
                    <CButton onClick={() => setBranchCreateModal(!BranchCreateModal)} color="primary" size="lg">Create Branch</CButton>
                </p>
            </CJumbotron>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>Shwoing  Demo of  table  </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={allBranch}
                                fields={fields}
                                dark
                                hover
                                striped
                                bordered
                                size="sm"
                                itemsPerPage={30}
                                pagination
                                scopedSlots={{
                                    'status':
                                        (item) => (
                                            <td>
                                                <CBadge color={getBadge(item.status)}>
                                                    {item.status}
                                                </CBadge>
                                            </td>
                                        )
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Branches
