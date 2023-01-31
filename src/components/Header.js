import Image from "next/image"
import Link from "next/link"

const Header = ({navbar}) => {
  const logo = navbar.fields.logo
  const menu = navbar.fields.menu

    return (
        <div
          className="
            flex
            items-center
            gap-10
            py-3
            px-6
          bg-emerald-200
            sticky
            top-0
          "
        >
            <Link href='/'>
              <Image
                src={'https:' + logo.fields.image.fields.file.url}
                alt={logo.fields.altTest}
                width={56}
                height={56}
              />
            </Link>
            
            <div>
              {
                !!menu.fields.links.length && menu.fields.links.map((link) => (
                  <Link 
                    key={link.sys.id} 
                    href={link.fields.url}
                    className="
                      text-sky-900
                      hover:text-sky-600 
                        hover:underline
                        text-lg
                        mx-2
                    "
                  >
                    {link.fields.text}
                  </Link>
                ))
              }
            </div>
        </div>
    )
}

export default Header