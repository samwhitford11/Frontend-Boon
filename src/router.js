import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { IndexLoader, ShowLoader, UpdateLoader } from "./loaders"
import { CreateAction, UpdateAction, DeleteAction, GiftCreateAction, GiftUpdateAction, GiftDeleteAction } from "./actions"
import { redirect } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index />}
        loader={IndexLoader} />
      <Route path="/post/:id/" element={<Show />} loader={ShowLoader} />
      {/* Person Routes */}
      <Route path="create" action={CreateAction} />
      <Route path="update/:id" action={UpdateAction} />
      <Route path="delete/:id" action={DeleteAction} />
      {/* Gift Routes  */}
      <Route path="create/post/" element={<Show title='Show' />} action={GiftCreateAction} />
      <Route path="update/post/:id" element={<Show title='Show' />} action={GiftUpdateAction} />
      <Route path="delete/post/:id" element={<Show title='Show' />} action={GiftDeleteAction} />
    </Route>
  )
)

export default router
