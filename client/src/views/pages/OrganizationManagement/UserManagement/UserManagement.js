import React, { useEffect, useState } from 'react'
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
import axios from 'axios'

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['name', 'email', 'user_role']

const UserManagement = () => {
    const [allUser, setAllUser] = useState([])
    const [userCreateModal, setUserCreateModal] = useState(false)


    useEffect(() => {
        axios.get('/api/users/allUser')
            .then((response) => {
                setAllUser(response.data)
            })
            .catch(err => console.log(err))
    }, [])
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
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default UserManagement
