// Root file of the codebase: apply global styles, add new themes, context for the whole application

import React from "react"
import Head from "next/head"
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Upload from "@/pages/Upload"
import Toolbar from "./Toolbar"

export default function App({ Component, pageProps }) {
  return (
  <div>
    <Navbar />
    <Upload />
    <Toolbar />
    <Component {...pageProps} />
  </div>
  );
}
