import { useRouter } from 'next/router'
import { FC } from 'react'
import classes from './languageSwitcher.module.scss'

const LanguageSwitcher: FC = () => {
  const router = useRouter()
  const { locale, locales } = router

  const handleChangeLocale = (e: string) => {
    const locale = e
    router.push(router.pathname, `/${locale}`, { locale })
  }

  return (
    <select
      className={classes.select}
      value={locale}
      onChange={(e) => handleChangeLocale(e.target.value)}
    >
      {locales?.map((lang) => (
        <option
          key={lang}
          value={lang}
        >
          {lang}
        </option>
      ))}
    </select>
  )
}

export default LanguageSwitcher
