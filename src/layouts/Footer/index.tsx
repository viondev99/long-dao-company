import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import classes from './footer.module.scss'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const Footer: FC = () => {
  const { t } = useTranslation('layouts/footer')
  return (
    <footer className={classes.footerWraper}>
      <div className={classes.contentWrapper}>
        <div>{t('TITLE')}</div>
        <div className={classes.selectWrapper}>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}

export default Footer
