import Link from 'next/link'

const Nav = () => (
    <div>
        <Link href="/sell">
            <a>Hey</a>
        </Link>
        <Link href="/">
            <p>Home</p>
        </Link>
    </div>
)

export default Nav