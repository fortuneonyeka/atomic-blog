import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { PostProvider } from "./context/PostContext";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <PostProvider>
      <section>
        <DarkModeToggle />

        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostProvider>
  );
}

<Footer />;

export default App;
