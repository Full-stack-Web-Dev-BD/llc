import React, { useState } from 'react'
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CForm,
    CInput,
    CInputGroup,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow
} from '@coreui/react'

import usersData from '../../users/UsersData'

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['name', 'Date', 'Edit', 'Delete']


const Setting = () => {
    const [countryModal, setCountryModal] = useState(false)
    const [stateModal, setStateModal] = useState(false)
    const [cityModal, setCityModal] = useState(false)




    const [allCity, setAllCity] = useState([])
    const [allState, setAllState] = useState([])
    const [allCountry, setAllCountry] = useState([])


    const [name, setName] = useState("")


    return (
        <>
            <CRow>
                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader>

                        </CCardHeader>
                        <CCardBody>

                            <CModal
                                show={countryModal}
                                onClose={() => setCountryModal(!countryModal)}
                                size="lg"
                            >
                                <CModalHeader closeButton>
                                    <CModalTitle>Add Country</CModalTitle>
                                </CModalHeader>
                                <CModalBody>
                                    <CForm>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <CInputGroup className="mb-3">
                                                    <CInput type="text" placeholder="Email" autoComplete="email" />
                                                </CInputGroup>
                                            </div>
                                        </div>
                                        <CButton color="success" block>Create Branch</CButton>
                                    </CForm>
                                </CModalBody>
                            </CModal>
                            <CButton color="success" onClick={() => setCountryModal(!countryModal)} className="mb-3" >Add Country</CButton>
                            <CDataTable
                                items={allCountry}
                                fields={fields}
                                size="sm"
                                itemsPerPage={5}
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
                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader> State</CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                size="sm"
                                itemsPerPage={5}
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
                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader> City</CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                size="sm"
                                itemsPerPage={5}
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

export default Setting
