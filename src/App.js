import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { PostProvider, usePostContext } from "./context/PostContext";
import DarkModeToggle from "./components/DarkModeToggle";
import { useMemo } from "react";

function App() {

  return (
    <PostProvider>
      <AppContent />
    </PostProvider>
  );
}

  function AppContent() {
    const { posts } = usePostContext();
  
    const archiveOptions = useMemo(() => ({
      show: false,
      title: `Posts archive in addition to ${posts.length} main posts`
    }), [posts.length]);
  
    return (
      <section>
        <DarkModeToggle />
        <Header />
        <Main />
        <Archive archiveOptions={archiveOptions} />
        <Footer />
      </section>
    );
  }

export default App;