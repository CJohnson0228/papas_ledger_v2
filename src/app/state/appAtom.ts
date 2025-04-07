// This may be unnecessary since using the Shadcn Sidebar component
// Will leave in place in case i need other app level state
import { atom } from 'jotai'
import { focusAtom } from 'jotai-optics'

interface AppState {
  isSidebarOpen: boolean
}

// App Parent State Atom
const appAtom = atom<AppState>({
  isSidebarOpen: false,
})

appAtom.debugLabel = 'App State'

// Sidebar State Atom
export const sidebarAtom = focusAtom(appAtom, (optic) =>
  optic.prop('isSidebarOpen')
)
sidebarAtom.debugLabel = 'isSidebarOpen'

export default appAtom
