import i18nPKG from './next-i18next.config.js'

const { i18n } = i18nPKG

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
}

export default nextConfig
