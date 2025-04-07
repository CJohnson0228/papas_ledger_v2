import { atom } from 'jotai'
import { User } from '../types/userTypes'

const userAtom = atom<User | null>()
userAtom.debugLabel = 'User State'

export const userLoadingAtom = atom<boolean>(true)
userLoadingAtom.debugLabel = 'User Loading'

export default userAtom
