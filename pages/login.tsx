import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";

const Login = dynamic(() => import('../components/Auth/Login'));

const LoginPage: NextPage = () => {
  return (
    <Login />
  )
}

export default LoginPage
