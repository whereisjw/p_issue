'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

const Provider = async ({children}:PropsWithChildren) => {
  const client = new QueryClient()
  return (
    <QueryClientProvider  client={client}>
  <SessionProvider>{children}</SessionProvider></QueryClientProvider>)
}

export default Provider