import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import * as child from "child_process";
const commitHash = child.execSync("git rev-parse --short HEAD").toString()

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  
  const config = {
    plugins: [react()],
    base: '/',
	define: {
		'import.meta.env.VITE_APP_VERSION': JSON.stringify(commitHash)
	}
  }

  if (command !== 'serve') {
    config.base = '/react-timezone-clocks/'
  }
  
  return config
})