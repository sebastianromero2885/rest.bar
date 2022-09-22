import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import barPic from "../assets/rest-bar.jpg";
import { useState } from "react";
export default function Home() {
  const [mesa, setMesa] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rest-bar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cabecera}>
        <h1> Aplicación Test </h1>
      </div>

      <div className={styles.maqueta}>
        <div className={styles.mesa1} onClick={ ()=> { setMesa(1) }}>
          <p>1</p>
        </div>
        <div className={styles.mesa2} onClick={ ()=> { setMesa(2) }}>
          <p>2</p>
        </div>
        <div className={styles.mesa3} onClick={ ()=> { setMesa(3) }}>
          <p>3</p>
        </div>

        <div className={styles.mesa4} onClick={ ()=> { setMesa(4) }}>
          <p>4</p>
        </div>

        <Image src={barPic} width={"800px"} height={"500px"}></Image>
      </div>

      {!mesa ? null : (
        <div className={styles.opcionelegida}>
          <h3>Seleccionaste la mesa número: {mesa}</h3>
        </div>
      )}

    </div>
  );
}
