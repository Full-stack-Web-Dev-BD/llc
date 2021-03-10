import React, { useEffect, useState } from 'react'
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
import TextField from '@material-ui/core/TextField';

import axios from 'axios'
import usersData from '../../users/UsersData'
import { Button, MenuItem, Select } from '@material-ui/core';

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['name', 'Delete']


const Setting = () => {
    const [countryModal, setCountryModal] = useState(false)
    const [stateModal, setStateModal] = useState(false)
    const [cityModal, setCityModal] = useState(false)
    const [error, setError] = useState({})


    const [allCity, setAllCity] = useState([])
    const [allState, setAllState] = useState([])
    const [allCountry, setAllCountry] = useState([])

    const [name, setName] = useState("")
    const [id, setId] = useState('')

    useEffect(() => {
        getAll()
    }, [])



    const addCountry = (e) => {
        e.preventDefault()
        axios.post('/api/countries/newCountry', { name }, { headers: { "Authorization": window.localStorage.getItem('llc_token') } })
            .then(res => {
                window.location.reload()
            })
            .catch(err => { setError(err.response.data) })
    }
    const deleteCountry = (id) => {
        axios.get(`/api/countries//delete/${id}`)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }
    const deleteState = (id) => {
        axios.get(`/api/states/delete/${id}`)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    const deleteCity = (id) => {
        axios.get(`/api/cities/delete/${id}`)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }
    const addState = (e) => {
        e.preventDefault()

        if (name && id) {

            axios.post(`/api/states/newState/${id}`, { name })
                .then(res => { window.location.reload() })
                .catch(err => { console.log(err) })
        } else {
            return alert('Please enter a name and select a country !!')
        }
    }
    const addCity = (e) => {
        e.preventDefault()

        if (name && id) {

            axios.post(`/api/cities/newCity/${id}`, { name })
                .then(res => { window.location.reload() })
                .catch(err => { console.log(err) })
        } else {
            return alert('Please enter a name and select a country !!')
        }
    }
    const getAll = () => {
        axios.get('/api/countries/allCountry')
            .then(resp => {
                setAllCountry(resp.data)
            })
            .catch(err => { console.log(err) })

        axios.get('/api/states/allState')
            .then(resp => {
                setAllState(resp.data)
            })
            .catch(err => { console.log(err) })

        axios.get('/api/cities/allCity')
            .then(resp => {
                setAllCity(resp.data)
            })
            .catch(err => { console.log(err) })
    }

    return (
        <>
            <CRow>
                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader> <h2 className="alert alert-success text-center"> Country </h2> </CCardHeader>
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
                                    <CForm onSubmit={addCountry}>
                                        <div className="row p-5">
                                            <div className="col-md-12 col-sm-12">
                                                {
                                                    error.message ?
                                                        <p className="text-danger"> {error.message} </p> : ''
                                                }
                                                <CInputGroup className="mb-3">
                                                    <TextField onChange={e => setName(e.target.value)} required width="100%" id="standard-basic" label="Country Name" />
                                                </CInputGroup>
                                            </div>
                                        </div>
                                        <CButton type="submit" color="success" block>Add Country</CButton>
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
                                    'Edit':
                                        (item) => (
                                            <td>
                                                <CButton color="info" size="small"> Edit </CButton>
                                            </td>
                                        ),

                                    'Delete':
                                        (item) => (
                                            <td>
                                                <CButton color="danger" onClick={() => deleteCountry(item._id)} size="small"> Delete </CButton>
                                            </td>
                                        )

                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader> <h2 className="alert alert-success text-center"> State </h2> </CCardHeader>
                        <CCardBody>
                            <CModal
                                show={stateModal}
                                onClose={() => setStateModal(!stateModal)}
                                size="sm"
                            >
                                <CModalHeader closeButton>
                                    <CModalTitle>Add State</CModalTitle>
                                </CModalHeader>
                                <CModalBody>
                                    <CForm onSubmit={addState}>
                                        <div className="row p-5">
                                            <div className="col-md-12 col-sm-12">
                                                {
                                                    error.message ?
                                                        <p className="text-danger"> {error.message} </p> : ''
                                                }
                                                <CInputGroup className="mb-3">
                                                    <div style={{ width: "100%" }}>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <TextField style={{ width: '100%' }} onChange={e => setName(e.target.value)} required width="100%" id="standard-basic" label="State Name" />
                                                            </div>
                                                            <div className="col-md-12 mt-4" >
                                                                <p>Select Country</p>
                                                                <Select
                                                                    placeholder="Select Country"
                                                                    style={{ width: '100%' }}
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    onChange={e => setId(e.target.value)}
                                                                >
                                                                    {
                                                                        allCountry.map(el => (
                                                                            <MenuItem value={el._id}> {el.name} </MenuItem>
                                                                        ))
                                                                    }
                                                                </Select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CInputGroup>
                                            </div>
                                        </div>
                                        <CButton type="submit" color="success" block>Add State</CButton>
                                    </CForm>
                                </CModalBody>
                            </CModal>
                            <CButton color="success" onClick={() => setStateModal(!countryModal)} className="mb-3" >Add  State</CButton>
                            <CDataTable
                                items={allState}
                                fields={fields}
                                size="sm"
                                itemsPerPage={5}
                                pagination
                                scopedSlots={{

                                    'Delete':
                                        (item) => (
                                            <td>
                                                <CButton color="danger" onClick={() => deleteState(item._id)} size="small"> Delete </CButton>
                                            </td>
                                        )

                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader> <h2 className="alert alert-success text-center"> City </h2> </CCardHeader>
                        <CCardBody>
                            <CModal
                                show={cityModal}
                                onClose={() => setCityModal(!cityModal)}
                                size="lg"
                            >
                                <CModalHeader closeButton>
                                    <CModalTitle>Add City</CModalTitle>
                                </CModalHeader>
                                <CModalBody>
                                    <CForm onSubmit={addCity}>
                                        <div className="row p-5">
                                            <div className="col-md-12 col-sm-12">
                                                {
                                                    error.message ?
                                                        <p className="text-danger"> {error.message} </p> : ''
                                                }
                                                <CInputGroup className="mb-3">
                                                    <div style={{ width: "100%" }}>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <TextField style={{ width: '100%' }} onChange={e => setName(e.target.value)} required width="100%" id="standard-basic" label="City Name" />
                                                            </div>
                                                            <div className="col-md-12 mt-4" >
                                                                <p>Select State</p>
                                                                <Select
                                                                    style={{ width: '100%' }}
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    onChange={e => setId(e.target.value)}
                                                                >
                                                                    {
                                                                        allState.map(el => (
                                                                            <MenuItem value={el._id}> {el.name} </MenuItem>
                                                                        ))
                                                                    }
                                                                </Select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CInputGroup>
                                            </div>
                                        </div>
                                        <CButton type="submit" color="success" block>Add City</CButton>
                                    </CForm>
                                </CModalBody>
                            </CModal>
                            <CButton color="success" onClick={() => setCityModal(!cityModal)} className="mb-3" >Add City</CButton>
                            <CDataTable
                                items={allCity}
                                fields={fields}
                                size="sm"
                                itemsPerPage={5}
                                pagination
                                scopedSlots={{

                                    'Delete':
                                        (item) => (
                                            <td>
                                                <CButton color="danger" onClick={() => deleteCity(item._id)} size="small"> Delete </CButton>
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
