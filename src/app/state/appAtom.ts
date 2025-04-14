// This may be unnecessary since using the Shadcn Sidebar component
// Will leave in place in case i need other app level state
import { atom } from 'jotai'
import { focusAtom } from 'jotai-optics'
import { ReactNode } from 'react'

interface AppState {
  isSidebarOpen: boolean
  isModalOpen: boolean
  modalContent: {
    title: string
    children: ReactNode | null
  } | null
}

// App Parent State Atom
const appAtom = atom<AppState>({
  isSidebarOpen: false,
  isModalOpen: false,
  modalContent: null,
})

appAtom.debugLabel = 'App State'

// Sidebar State Atom
export const sidebarAtom = focusAtom(appAtom, (optic) =>
  optic.prop('isSidebarOpen')
)
sidebarAtom.debugLabel = 'isSidebarOpen'

// Modal Open State Atom
export const isModalOpenAtom = focusAtom(appAtom, (optic) =>
  optic.prop('isModalOpen')
)
isModalOpenAtom.debugLabel = 'isModalOpen'

// Modal Content State Atom
export const modalContentAtom = focusAtom(appAtom, (optic) =>
  optic.prop('modalContent')
)
modalContentAtom.debugLabel = 'modalContent'

export default appAtom
