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
import BranchCreateForm from './BranchCreateForm'
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
const fields = ["name", "location", "address", "phone1", "phone2", "email", "action"]



const Branches = () => {
    const [allBranch, setAllBranch] = useState([])
    const [BranchCreateModal, setBranchCreateModal] = useState(false)


    useEffect(() => {
        axios.get('/api/branchs/allBranch')
            .then((response => {
                console.log()
                setAllBranch(response.data)
            }))
            .catch(err => { console.log(err) })
    }, [])



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

                                    'action':
                                        (item) => (
                                            <td>
                                                <CButton color="success" size="small"> Details </CButton>
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
