import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { Alert, AlertDescription } from './components/ui/alert'
import { Button } from './components/ui/button'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full">
      <div className="text-xl text-indigo-500">React & Typescript & TailwindCSS & shadcnUI </div>

      <div className="text-xl text-red-800">Powered by electron-vite </div>
      <Alert variant="default" title="asd" className="w-1/3">
        <AlertDescription>
          <ExclamationTriangleIcon /> Lorem ipsum dolor sit.
        </AlertDescription>
      </Alert>
      <p className="font-bold text-green-800">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="cursor-pointer bg-slate-900 text-white rounded-lg ">
        <Button size="sm" variant="secondary" onClick={ipcHandle}>
          <span>Click Me</span>
        </Button>
      </div>
    </div>
  )
}

export default App
