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
import Register from './UserRegisterForm'

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['name', 'registered', 'role', 'status']

const UserManagement = () => {
    const [allUser, setAllUser] = useState([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 21, 12,])
    const [userCreateModal, setUserCreateModal] = useState(false)
    return (
        <>
            <CJumbotron className="border">
                <h1 className="display-3">User Management </h1>
                <p className="lead">Manage User  by Creat , Update ,Delete</p>
                <hr className="my-2" />
                <p className="lead">
                    <CModal
                        show={userCreateModal}
                        onClose={() => setUserCreateModal(!userCreateModal)}
                        size="lg"
                    >
                        <CModalHeader closeButton>
                            <CModalTitle>User Register</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                            <Register />
                        </CModalBody>
                        <CModalFooter>
                            <CButton color="primary" onClick={() => setUserCreateModal(!userCreateModal)} >Cancel</CButton>{' '}
                        </CModalFooter>
                    </CModal>
                    <CButton onClick={() => setUserCreateModal(!userCreateModal)} color="primary" size="lg">Create User</CButton>
                </p>
            </CJumbotron>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>Shwoing  Demo of  table  </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={allUser}
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

export default UserManagement
