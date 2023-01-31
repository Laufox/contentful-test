import Header from "./Header"

const Layout = ({navbar, children}) => {

    return (
        <>
            <Header navbar={navbar} />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout