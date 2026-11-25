import CatalogPage from '../../pages/catalog-page/catalog-page';

type AppProps = {
  offerCount: number;
};

function App({ offerCount }: AppProps) {
  return <CatalogPage offerCount={offerCount} />;
}

export default App;
