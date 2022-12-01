import Home from "../components/home";
import About from "../components/about";
import Head from "next/head";
import Why from "../components/Why";
import BottomDiv from "../components/BottomDiv";
import Projects from "../components/projects";

function index() {
  return (
    <>
      <Head>
        <title>Ken Eucker</title>
        <meta name="title" content="Ken Eucker" />
        <meta
          name="description"
          content="Software Engineer with a decade of experience in NodeJs, collaborating on multiple open-source projects. Author/Maintainer of imgur and biketag-api on npm"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Ken Eucker" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Components */}
      <Home />
      <About />
      <Projects />
      <Why />
      <BottomDiv />
    </>
  );
}

export default index;
