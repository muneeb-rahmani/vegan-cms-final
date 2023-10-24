import Image from 'next/image'
import { Inter } from 'next/font/google'
import GridBlog from '@/components/GridBlog'
import Blog from '@/components/Blog'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    {/* <GridBlog /> */}
    <Blog />
    </>
  )
}
