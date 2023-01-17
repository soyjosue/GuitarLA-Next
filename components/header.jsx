import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import logoImagePath from '@/public/img/logo.svg';
import carritoImagePath from '@/public/img/carrito.png';

import styles from '@/styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`Contenedor ${styles.barra}`}>
        <Link href={"/"}>
          <Image
            src={logoImagePath}
            width={300}
            height={40}
            alt='imagen logotipo'
          />
        </Link>

        <nav className={styles.navegacion}>
          <NavLinkCustom href="/">Inicio</NavLinkCustom>

          <NavLinkCustom href="/nosotros">Nosotros</NavLinkCustom>

          <NavLinkCustom href="/tienda">Tienda</NavLinkCustom>

          <NavLinkCustom href="/blog">Blog</NavLinkCustom>

          <NavLinkCustom href="/carrito">
            <Image 
              width={30}
              height={25}
              src={carritoImagePath}
              alt="imagen carrito"
              style={{ borderRadius: 0 }}
            />
          </NavLinkCustom>
        </nav>
      </div>
    </header>
  )
}

function NavLinkCustom({ children, href }) {
  const router = useRouter();
  return (
    <Link href={href} className={router.pathname === href ? styles.active : ''}>
      {children}
    </Link>
  )
}
