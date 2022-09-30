import 'styled-components'
import { lightTheme, darkTheme } from '../styles/themes'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
