import Logo from './assets/logo.svg'

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className="d-flex">
            <img src={Logo} alt="Logo" />
            ProjectMgmt
          </div>
        </a>
      </div>
    </nav>
  )
}
