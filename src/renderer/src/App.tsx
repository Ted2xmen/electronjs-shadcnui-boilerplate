function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full">
      <div className="text-xl text-indigo-500">React & Typescript & TailwindCSS </div>

      <div className="text-xl text-red-800">Powered by electron-vite </div>

      <p className="font-bold text-green-800">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="cursor-pointer bg-slate-900 text-white p-5 rounded-lg ">
        <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
          Send IPC
        </a>
      </div>
    </div>
  )
}

export default App
