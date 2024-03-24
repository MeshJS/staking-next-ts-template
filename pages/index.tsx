import Head from "next/head";
import { StakeButton, MeshBadge } from "@meshsdk/react";

const localPoolID = process.env.NEXT_PUBLIC_POOL_ID

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Mesh App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <link
          rel="icon"
          href="https://meshjs.dev/favicon/favicon-32x32.png"
        />
        <link
          href="https://meshjs.dev/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Head>

      <main className="main">
        <h1 className="title">
          <a href="https://meshjs.dev/">Mesh</a> Pool Operator Portal
        </h1>

        <div className="demo">
          <StakeButton
            onCheck={(address: string) => {
              return new Promise((resolve, reject) => {
                fetch(`/api/koios?address=${address}`)
                  .then(response => response.json())
                  .then(info => {
                    resolve(info);
                  })
                  .catch(error => {
                    reject(error);
                  });
              });
            }}
            poolId={localPoolID}
          />
        </div>

        <div className="grid">
          <a href="https://meshjs.dev/apis" className="card">
            <h2>Documentation</h2>
            <p>
              Our documentation provide live demos and code samples; great
              educational tool for learning how Cardano works.
            </p>
          </a>

          <a
            href="https://meshjs.dev/react/ui-components#stakeButton"
            className="card"
          >
            <h2>Staking Button</h2>
            <p>
              Learn more about the staking button that creating staking
              transactions, and add into your website.
            </p>
          </a>

          <a href="https://meshjs.dev/react" className="card">
            <h2>React components</h2>
            <p>
              Useful React UI components and hooks, seamlessly integrate them
              into your app, and bring the user interface to life.
            </p>
          </a>
        </div>
      </main>

      <footer className="footer">
        <MeshBadge dark={true} />
      </footer>
    </div>
  );
}
