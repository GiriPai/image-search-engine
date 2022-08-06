import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from "./components/layouts/DefaultLayout";
import ImgSearchEngine from "./pages/ImgSearchEngine";

const App = () => {
  return (
    <DefaultLayout>
      <ImgSearchEngine />
    </DefaultLayout>
  );
}

export default App;
