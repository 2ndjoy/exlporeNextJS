import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link href='/posts'>Posts</Link>
      <Link href='/comments/comments'>Comments</Link>
    </div>
  )
}
