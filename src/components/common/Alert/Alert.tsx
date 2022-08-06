import React from 'react'

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
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}

export default Alert