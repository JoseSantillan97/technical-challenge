import logo from './../public/assets/logo.png'
import Image from 'next/image'
export default function Navbar() {
	return (
		<section className="nav">
			<Image className='nav-image' src={logo} alt="Logo de banco azteca" width={250} />
		</section>
	)
}