import Head from "next/head";
import { MaestroProvider } from "@meshsdk/core";
import { StakeButton, MeshBadge } from "@meshsdk/react";

export default function Home() {
  const blockchainProvider = new MaestroProvider({
    network: 'Preprod', // 'Mainnet', 'Preprod', 'Preview'
    apiKey: 'xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxy', //'<Your-API-Key>',
    turboSubmit: false
  });

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
            onCheck={(address: string) =>
              blockchainProvider.fetchAccountInfo(address)
            }
            poolId="pool1mhww3q6d7qssj5j2add05r7cyr7znyswe2g6vd23anpx5sh6z8d"
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
