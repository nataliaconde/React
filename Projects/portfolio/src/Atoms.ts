import { atom } from "jotai"
import { atomWithStorage } from 'jotai/utils'

export const darkModeAtom = atomWithStorage<boolean>("darkMode", true)
export const currentDevAtom = atom("Steve Fisher")
export const weatherDataAtom = atom<Array<string>>([])