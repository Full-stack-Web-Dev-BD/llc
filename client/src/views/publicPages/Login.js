import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const BasicForms = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)

    return (
        <>
            <CRow>
                <div className="col-md-6 offset-md-3">
                    <CCard>
                        <CCardHeader>
                            Login<small> Form</small>
                        </CCardHeader>
                        <CCardBody>
                            <CForm action="" method="post" className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="hf-email">Email</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="email" id="hf-email" name="hf-email" placeholder="Enter Email..." autoComplete="email" />
                                        <CFormText className="help-block">Please enter your email</CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="hf-password">Password</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." autoComplete="current-password" />
                                        <CFormText className="help-block">Please enter your password</CFormText>
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                        </CCardFooter>
                    </CCard>
                </div>
            </CRow>
        </>
    )
}

export default BasicForms
