import settings from '@/config/baseConfig'

const title = settings.title || 'Vue mobile project'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
