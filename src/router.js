import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { IndexLoader, ShowLoader, UpdateLoader } from "./loaders"
import { CreateAction, UpdateAction, DeleteAction, GiftCreateAction, GiftUpdateAction, GiftDeleteAction } from "./actions"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index/>}
      loader={IndexLoader}/>
      <Route path="/post/:id" element={<Show/>} loader={ShowLoader} />
      <Route path="create" action={CreateAction} />
      <Route path="update/:id" action={UpdateAction} />
      <Route path="delete/:id" action={DeleteAction} />
      {/* Gift Routes */}
      <Route path="create" action={GiftCreateAction} />
      <Route path="update/:id" action={GiftUpdateAction} />
      <Route path="delete/:id" action={GiftDeleteAction} />
    </Route>
  )
)

export default router