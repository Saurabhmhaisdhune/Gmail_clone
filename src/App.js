import Home from "./Components/Home";

function App() {
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
// export function ProtectedRoute(props) {
//   const user = localStorage.getItem("user");

//   if (!user) {
//    return <Navigate to="/login" />;
//   } else {
//    return <Route {...props} />;
//   }
// }
