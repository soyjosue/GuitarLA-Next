import Image from 'next/image';

import Layout from '@/components/layout';

import styles from '@/styles/nosotros.module.css';

const Nosotros = () => 
{
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, guitarLA, tienda de música."
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800} />

          <div>
            <p>Maecenas nisi turpis, tempor eu ipsum quis, porta aliquet eros. Cras facilisis, mauris rhoncus suscipit pulvinar, sapien orci dignissim est, eget pharetra odio turpis ut sem. Ut egestas faucibus velit. Quisque convallis metus sit amet tincidunt maximus. Duis vestibulum, ante sit amet lobortis dignissim, odio tortor blandit turpis, vitae ultrices orci nunc sem.</p>
            <p>Ut placerat vel tellus non consequat. Suspendisse justo mauris, pulvinar et ipsum in, facilisis porta lorem. Sed ultrices sem a eros pulvinar, in rhoncus nisi finibus. Cras odio magna, aliquet et ultricies id, ornare sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sollicitudin ullamcorper lacus.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros;