import { User } from '@/types/userTypes'
import { atom } from 'jotai'

const userAtom = atom<User | null>()
userAtom.debugLabel = 'User State:'

export default userAtom
