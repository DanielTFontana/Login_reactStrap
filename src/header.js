import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';



function NavHeader(args) {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen)

    return(
    <div id='nav'>
        <Navbar {...args} style={{
            backgroundColor: '#025',
        }} className='mb-4'>
            <NavbarBrand className='text-white' href="/">Home</NavbarBrand>
            <NavbarToggler style={{
                backgroundColor: '#359',
            }} className='text-white' onClick={toggle} />
            <Collapse className='text-white' isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink className='text-white' href="https://globalsys.com.br/">Globalsys</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-white' href="https://github.com/DanielTFontana/">
                            GitHub
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className='text-white'>
                            Cadastro
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem >Cadastrar-se</DropdownItem>
                            <DropdownItem >Esqueci a senha</DropdownItem>

                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    )
}

export default NavHeader