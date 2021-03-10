import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [error, setError] = useState({})



  const submitHandler = (e) => {
    e.preventDefault()

    let info = { email, password }
    axios.post('/api/users/login', info)
      .then(response => {
        window.localStorage.setItem('llc_token', response.data.token)
        history.push('/dashboard')
      })
      .catch(err => {
        console.log(err.response.data)
        setError(err.response.data)
      })
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={submitHandler}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    {
                      error.message ? <p className="text-danger"> {error.message} </p> : ''
                    }
                    {
                      error.email ?
                        <p className="text-danger " > {error.email} </p> : ''
                    }
                    {
                      error.password ?
                        <p className="text-danger " > {error.password} </p> : ''
                    }
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={e => setEmail(e.target.value)} type="text" required placeholder="Email" autoComplete="email" />

                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required autoComplete="password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" size="sm" color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        {/* <CButton color="link" className="px-0">Forgot password?</CButton> */}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <p onClick={() => console.log(error)} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
