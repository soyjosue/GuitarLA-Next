import { useState } from 'react';

import Image from 'next/image';

import Layout from '@/components/layout';

import styles from '@/styles/guitarras.module.css';

export default function Producto({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);

  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  const handleSubmit = e => 
  {
    e.preventDefault();

    if(cantidad < 1) 
    {
      alert('Cantidad no válida.');
      return;
    }

    const guitarraSeleccionada = 
    {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      descripcion,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada);

  }

  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          width={600}
          height={400}
          alt={`Imagen guitarra ${nombre}`}
          src={imagen.data.attributes.url}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form 
            onSubmit={handleSubmit}
            className={styles.formulario}
          >
            <label htmlFor="cantidad">Cantidad:</label>

            <select 
              id="cantidad"
              onChange={ ({target: {value}}) => setCantidad(+value)}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

// export async function getStaticPaths() 
// {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
//   const { data } = await respuesta.json();

//   console.log(data);

//   const paths = data.map(guitarra => ({
//     params: {
//       url: guitarra.attributes.url
//     }
//   }));

//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({params: {url}})
// {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
//   var {data:guitarra} = await respuesta.json();

//   return {
//     props: {
//       guitarra
//     }
//   }
// }

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  var { data: guitarra } = await respuesta.json();

  return {
    props: {
      guitarra
    }
  }
}