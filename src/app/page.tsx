/* eslint-disable react/no-unescaped-entities */
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">n00sphere</h1>
      {/* <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center mb-5">
            <SunIcon className="h-8 w-8"/>         
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain quantum computing in simple terms" →</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center mb-5">
            <BoltIcon className="h-8 w-8"/>         
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Remembers what user said earlier in the conversation</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8"/>         
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}
