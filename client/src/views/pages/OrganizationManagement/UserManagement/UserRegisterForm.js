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

const UserRegisterForm = () => {
  const [allCountry, setAllCountry] = useState([])
  const [allState, setAllState] = useState([])
  const [allCity, setAllCity] = useState([])


  const [allUser, setAllUser] = useState([])
  const [error, setError] = useState({})


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')






  useEffect(() => {
    axios.get('/api/users/allUser')
      .then((response) => {
        setAllUser(response.data)
      })
      .catch(err => console.log(err))
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
      email,
      phone,
      password
    }
    axios.post('/api/users/register-user', info)
      .then(res => {
        window.location.reload()
      })
      .catch(err => setError(err.response.data))
  }



  return (
    <CForm onSubmit={submitHandler}>
      {
        error.name ?
          <p className="text-center text-danger"> {error.name} </p> : ''
      }
      {
        error.email ?
          <p className="text-center text-danger"> {error.email} </p> : ''
      }
      {
        error.password ?
          <p className="text-center text-danger"> {error.password} </p> : ''
      }
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setName(e.target.value) }} style={{ width: '100%' }} label="Name" placeholder="Name" />
        </div>
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setEmail(e.target.value) }} style={{ width: '100%' }} label="Email" type="email" placeholder="Email" />
        </div>
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setPassword(e.target.value) }} style={{ width: '100%' }} label="Password" type="password" placeholder="Name" />
        </div>
        <div className="col-md-6 col-sm-12">
          <TextField required onChange={(e) => { setPhone(e.target.value) }} style={{ width: '100%' }} type="number" label="Phone" placeholder="Phone" />
        </div>
      </div>
      <CButton color="success" type="submit" className="mt-4" block>Create User</CButton>
    </CForm>
  )
}

export default UserRegisterForm
