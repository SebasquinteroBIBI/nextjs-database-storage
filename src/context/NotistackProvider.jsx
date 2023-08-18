'use client'
import React from 'react'
import { SnackbarProvider } from 'notistack'

export default function NotistackProvider (props) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
    >
      {props.children}
    </SnackbarProvider>
  )
}
