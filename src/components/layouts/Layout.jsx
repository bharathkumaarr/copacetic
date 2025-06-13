export default function Layout(props){
    const {children} = props
    return (
        <>
            <header>
                <h1 className="text-gradient">Copacetic</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <small>Created by</small>
                <a href="https://github.com/bharathkumaarr" target="_blank">
                <img src="https://avatars.githubusercontent.com/u/121338792?v=4" alt="pfp" />
                <p>@bharathkumaarr</p>
                <i className="fa-brands fa-github"></i>
                </a>
            </footer>
        </>
    )
}