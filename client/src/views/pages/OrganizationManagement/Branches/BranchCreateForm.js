import React, { useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import { MenuItem, Select, TextField } from '@material-ui/core'
import { useState } from 'react'
import axios from 'axios'
import { set } from 'mongoose'

const BranchCreateForm = () => {
  const [allCountry, setAllCountry] = useState([])
  const [allState, setAllState] = useState([])
  const [allCity, setAllCity] = useState([])




  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')





  useEffect(() => {
    axios.get('/api/countries/allCountry')
      .then(res => {
        setAllCountry(res.data)
      })
      .catch(err => console.log(err))

    axios.get('/api/states/allState')
      .then(res => {
        setAllState(res.data)
      })
      .catch(err => console.log(err))
    axios.get('/api/cities/allCity')
      .then(res => {
        setAllCity(res.data)
      })
      .catch(err => console.log(err))
  }, [])


  const submitHandler = (e) => {
    e.preventDefault()
    let info = {
      name,
      location,
      city,
      address,
      state,
      phone1,
      phone2,
      email,
      country
    }
    axios.post('/api/branchs/newBranch', info)
      .then(res => {
        window.location.reload()
      })
      .catch(err => console.log(err))
  }



  return (
    <CForm onSubmit={submitHandler}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setName(e.target.value) }} style={{ width: '100%' }} label="Name" placeholder="Name" />
        </div>
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setLocation(e.target.value) }} style={{ width: '100%' }} label="Location" placeholder="Location" />
        </div>
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setPhone1(e.target.value) }} style={{ width: '100%' }} type="number" label="Phone 1" placeholder="Phone 1" />
        </div>
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setPhone2(e.target.value) }} style={{ width: '100%' }} type="number" label="Phone 2" placeholder="Phone 2" />
        </div>
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setEmail(e.target.value) }} style={{ width: '100%' }} type="email" label="Email" placeholder="Email" />
        </div>
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setAddress(e.target.value) }} style={{ width: '100%' }} label="Address" placeholder="Address" />
        </div>
        <div className="col-md-6 col-sm-12">

          <p style={{ lineHigh: '0', margin: '0' }}>Select Country</p>
          <Select
            required={true}
            placeholder="Select Country"
            style={{ width: '100%' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={e => setCountry(e.target.value)}
          >
            {
              allCountry.map(el => (
                <MenuItem value={el._id}> {el.name} </MenuItem>
              ))
            }
          </Select>
        </div>
        <div className="col-md-6 col-sm-12">

          <p style={{ lineHigh: '0', margin: '0' }}>Select Country</p>
          <Select
            required={true}
            placeholder="Select Country"
            style={{ width: '100%' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={e => setState(e.target.value)}
          >
            {
              allState.map(el => (
                <MenuItem value={el._id}> {el.name} </MenuItem>
              ))
            }
          </Select>
        </div>
        <div className="col-md-6 col-sm-12">

          <p style={{ lineHigh: '0', margin: '0' }}>Select Country</p>
          <Select
            required={true}
            placeholder="Select Country"
            style={{ width: '100%' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={e => setCity(e.target.value)}
          >
            {
              allCity.map(el => (
                <MenuItem value={el._id}> {el.name} </MenuItem>
              ))
            }
          </Select>
        </div>
      </div>
      <CButton color="success" type="submit" className="mt-4" block>Create Branch</CButton>
    </CForm>
  )
}

export default BranchCreateForm
