export default function Nav() {
    
    return <nav className="nav">
       <ul>
           <CustomLink href="/products">Products</CustomLink>
           <CustomLink href="/about">About</CustomLink>
           <CustomLink href="/contact">Contact</CustomLink>
       </ul>
    </nav>
}

function CustomLink({ href, childeren, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>{childeren}</a>
        </li>
    )
}