import React from 'react'
import { Alert as RBAlert } from "react-bootstrap"
type AlertProps = {
  children: React.ReactNode,
  variant: 'primary' |
  'secondary' |
  'success' |
  'danger' |
  'warning' |
  'info' |
  'light' |
  'dark'
}

const Alert = ({ variant, children }: AlertProps) => {
  return (
    <RBAlert variant={variant}>
      {children}
    </RBAlert>
  )
}

export default Alert