import { Link as ScrollLink } from "react-scroll"

const NavLink = ({ href, title }) => {
    return (
        <ScrollLink 
            to={href.replace('#', '')} // Menghilangkan '#' dari href untuk id
            spy={true}
            smooth={true} // Mengaktifkan efek smooth
            offset={-70} // Sesuaikan offset jika navbar Anda fixed
            duration={500} // Durasi dalam milidetik
            href={href} 
            className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white  cursor-pointer'
            >
            {title}
        </ScrollLink>
    )
}

export default NavLink;