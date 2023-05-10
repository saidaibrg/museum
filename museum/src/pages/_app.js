// Root file of the codebase: apply global styles, add new themes, context for the whole application

import React from "react"
import Head from "next/head"
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Layout from "@/components/Layout"
import Upload from "@/components/Upload"

export default function App({ Component, pageProps }) {
  return (
  <div>
    <Layout>
       <Component {...pageProps} />
    </Layout>
  </div>
  );
}
