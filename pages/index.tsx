import Head from "next/head";
import { BlockfrostProvider } from "@martifylabs/mesh";
import { StakeButton, MeshBadge } from "@martifylabs/mesh-react";

export default function Home() {
  const blockfrost = new BlockfrostProvider(
    process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY!
  );

  return (
    <div className="container">
      <Head>
        <title>Mesh App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <link
          rel="icon"
          href="https://mesh.martify.io/favicon/favicon-32x32.png"
        />
        <link
          href="https://mesh.martify.io/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Head>

      <main className="main">
        <h1 className="title">
          <a href="https://mesh.martify.io/">Mesh</a> Pool Operator Portal
        </h1>

        <div className="demo">
          <StakeButton
            onCheck={(address: string) => blockfrost.fetchAccountInfo(address)}
            poolId="pool1adur9jcn0dkjpm3v8ayf94yn3fe5xfk2rqfz7rfpuh6cw6evd7w"
          />
        </div>

        <div className="grid">
          <a href="https://mesh.martify.io/apis" className="card">
            <h2>Documentation</h2>
            <p>
              Our documentation provide live demos and code samples; great
              educational tool for learning how Cardano works.
            </p>
          </a>

          <a href="https://mesh.martify.io/guides/staking" className="card">
            <h2>Staking guide</h2>
            <p>
              Learn more about creating staking transactions, and how you can
              create a site for minting native tokens.
            </p>
          </a>

          <a href="https://mesh.martify.io/react" className="card">
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
