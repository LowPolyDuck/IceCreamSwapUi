export const getDeploymentUrl = () => {
  if (process.env.VERCEL_ENV === 'production') {
    return 'interface-web-rho.vercel.app'
  }
  if (process.env.VERCEL_ENV === 'preview') {
    return process.env.VERCEL_URL
  }
  return 'http://localhost:3000'
}
