import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from './components/Layout'
function MyApp({ Component, pageProps }: any) {
  return (
    <div className=" bg-gradient-to-b from-black to-blue-700 animate-gradient-y" >
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  )
}

export default MyApp
