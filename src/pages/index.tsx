import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Home from '@/components/Home'

const HomePage: NextPage = () => {
  const router = useRouter()
  const { locale } = router

  useEffect(() => {
    router.push(router.pathname, `/${locale}`, { locale })
  }, [])

  return (
    <>
      <Head>
        <title>Long Đạo Company</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', [
      'common',
      'layouts/header',
      'layouts/footer',
      'pages/home',
    ])),
  },
})

export default HomePage
