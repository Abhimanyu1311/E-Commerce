import { Alert } from '@material-tailwind/react'
import React from 'react'

const NotificationAlert = ({message}) => {
  return (
    <Alert color="red">{message}</Alert>
  )
}

export default NotificationAlert