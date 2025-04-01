import { atom } from 'jotai'

interface AppState {
  isSidebarOpen: boolean
}

const appAtom = atom<AppState>({
  isSidebarOpen: true,
})
appAtom.debugLabel = 'App State:'

export default appAtom
