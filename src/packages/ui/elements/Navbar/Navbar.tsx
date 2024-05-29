import Link from 'next/link'

const navbarLinks = [
  { href: '/', title: 'Home' },
  { href: '/dashboard', title: 'Dashboard' },
]

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-800 px-5 py-3">
      <h1 className={`text-xl font-bold text-white`}>Next.js Template</h1>
      <ul className="flex w-2/6 items-center justify-between">
        {navbarLinks.map(({ href, title }) => (
          <li key={title}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
