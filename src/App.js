import {
  Routes,
  Route,
  NavLink,
  Outlet,
  useParams,
  useMatch,
  useNavigate,
  Navigate,
  useRoutes,
} from 'react-router-dom';
import styles from './app.module.css';
import { useEffect, useState } from 'react';

const database = {
  productList: [
    { id: 1, name: 'TV' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Tablet' },
  ],
  products: {
    1: { id: 1, name: 'TV', price: 10990, amount: 10 },
    2: { id: 2, name: 'Smartphone', price: 5990, amount: 20 },
    3: { id: 3, name: 'Tablet', price: 7990, amount: 15 },
  },
};

const fetchProductsList = () => database.productList;

const fetchProduct = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(database.products[id]);
    }, 2500);
  });

function App() {
  const MainPage = () => <div>Контент главной страницы</div>;
  const Catalog = () => (
    <div>
      <h3>Контент каталога</h3>
      <ul>
        {fetchProductsList().map(({ id, name }) => (
          <li key={id}>
            <NavLink to={`product/${id}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
  const Contacts = () => <div>Контент контактов</div>;
  const NotFound = () => <div>Такая страница не существует</div>;
  const ProductNotFound = () => <div>Такой товар не существует</div>;
  const ExtendedLink = ({ to, children }) => (
    <NavLink to={to}>
      {({ isActive }) =>
        isActive ? (
          <>
            <span>{children}</span>
            <span>*</span>
          </>
        ) : (
          <>{children}</>
        )
      }
    </NavLink>
  );
  const ProductLoadError = () => (
    <div>Ошибка загрузки товара, попробуйте еще раз позднее</div>
  );
  const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const urlMatchData = useMatch('catalog/:type/:id');

    console.log(urlMatchData);

    useEffect(() => {
      let isLoadingTimeout = false;
      let isProductLoaded = false;

      setTimeout(() => {
        isLoadingTimeout = true;

        if (!isProductLoaded) {
          navigate('/product-load-error');
        }
      }, 3000);

      fetchProduct(params.id).then((loadedProduct) => {
        isProductLoaded = true;

        if (!isLoadingTimeout) {
          if (!loadedProduct) {
            navigate('/product-not-exists', { replace: true });
            return;
          }
          setProduct(loadedProduct);
        }
      });
    }, [params.id, navigate]);

    if (!product) {
      return null;
    }
    const { name, price, amount } = product;
    return (
      <div>
        <h3>Товар - {name}</h3>
        <div>Цена: {price}</div>
        <div>Количество: {amount}</div>
      </div>
    );
  };

  const routes = useRoutes([
    { path: '/', element: <MainPage /> },
    { path: '/catalog', element: <Catalog />, children: [
      {path: 'product/:id', element: <Product/>},
      {path: 'service/:id', element: <Product/>},
    ]},
  ]);

  return (
    <div className={styles.app}>
      <div>
        <h1>Routes</h1>
        <ul>
          <li>
            <ExtendedLink to="/">Main</ExtendedLink>
          </li>
          <li>
            <ExtendedLink to="/catalog">Catalog</ExtendedLink>
          </li>
          <li>
            <ExtendedLink to="/contacts">Contacts</ExtendedLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/catalog" element={<Catalog />}>
          <Route path="product/:id" element={<Product />} />
          <Route path="service/:id" element={<Product />} />
        </Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/product-load-error" element={<ProductLoadError />}></Route>
        <Route path="/product-not-exists" element={<ProductNotFound />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      {routes}
    </div>
  );
}

export default App;
