import Image from "next/image"
import Link from "next/link"

const Header = ({navbar}) => {
  const logo = navbar.fields.logo
  const menu = navbar.fields.menu

    return (
        <div>
            <Link href='/'>
              <Image
                src={'https:' + logo.fields.image.fields.file.url}
                alt={logo.fields.altTest}
                width={32}
                height={32}
              />
            </Link>
            
            <div>
              {
                !!menu.fields.links.length && menu.fields.links.map((link) => (
                  <Link key={link.sys.id} href={link.fields.url}>{link.fields.text}</Link>
                ))
              }
            </div>
        </div>
    )
}

export default Header