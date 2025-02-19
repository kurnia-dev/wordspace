import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import palete from './assets/palete.json';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        ...palete,
      }
    }
  },
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
  ]
}
