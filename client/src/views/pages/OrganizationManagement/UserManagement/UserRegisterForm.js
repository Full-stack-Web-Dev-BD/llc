import React from 'react'
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
import CIcon from '@coreui/icons-react'

const UserRegisterForm = () => {
  return (
    <CForm>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-3">
            <CInput type="text" placeholder="Name" autoComplete="name" />
          </CInputGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-3">
            <CInput type="text" placeholder="Email" autoComplete="email" />
          </CInputGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-3">
            <CInput type="Phone 1 " placeholder="Phone 1 " autoComplete="Phone 1 " />
          </CInputGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-3">
            <CInput type="Phone 2 " placeholder="Phone 2 " autoComplete="Phone 2 " />
          </CInputGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-4">
            <CInput type="Address" placeholder=" Address" autoComplete="Address" />
          </CInputGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-4">
            <CInput type="City" placeholder=" City" autoComplete="City" />
          </CInputGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-4">
            <CInput type="State" placeholder=" State" autoComplete="State" />
          </CInputGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-4">
            <CInput type="Country" placeholder=" Country" autoComplete="Country" />
          </CInputGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-4">
            <CInput type="Location" placeholder=" Location" autoComplete="Location" />
          </CInputGroup>
        </div>
        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-4">
            <CInput type="Address" placeholder=" Address" autoComplete="Address" />
          </CInputGroup>
        </div>

        <div className="col-md-6 col-sm-12">
          <CInputGroup className="mb-4">
            <CInput type="Branch ID" placeholder=" Branch ID" autoComplete="Branch ID" />
          </CInputGroup>
        </div>
      </div>
      <CButton color="success" block>Register</CButton>
    </CForm>
  )
}

export default UserRegisterForm
