import Link from 'next/link';

import styles from '@/styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
      <nav className={styles.navegacion}>
          <NavLinkCustom href="/" text="Inicio" />

          <NavLinkCustom href="/nosotros" text="Nosotros" />

          <NavLinkCustom href="/tienda" text="Tienda" />

          <NavLinkCustom href="/blog" text="Blog" />
        </nav>

        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

function NavLinkCustom({ href, text }) {
  return (
    <Link href={href}> {text} </Link>
  )
}
