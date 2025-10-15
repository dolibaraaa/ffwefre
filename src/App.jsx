import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import LocationPermission from './components/LocationPermission'
import BluetoothPermission from './components/BluetoothPermission'
import NotificationPermission from './components/NotificationPermission'
import BluetoothSetup from './components/BluetoothSetup'
import BatteryOptimization from './components/BatteryOptimization'
import ChatScreen from './components/ChatScreen'
import CommandsHelp from './components/CommandsHelp'
import LocationChannels from './components/LocationChannels'
import NetworkPeople from './components/NetworkPeople'

function App() {
  const [currentStep, setCurrentStep] = useState(5)
  const [showCommands, setShowCommands] = useState(false)
  const [showChannels, setShowChannels] = useState(false)
  const [showNetwork, setShowNetwork] = useState(false)

  const steps = [
    { component: WelcomeScreen, name: 'welcome' },
    { component: LocationPermission, name: 'location' },
    { component: BluetoothPermission, name: 'bluetooth' },
    { component: NotificationPermission, name: 'notification' },
    { component: BluetoothSetup, name: 'setup' },
    { component: BatteryOptimization, name: 'battery' },
    { component: ChatScreen, name: 'chat' }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const CurrentComponent = steps[currentStep].component

  return (
    <div className="app">
      <CurrentComponent
        onNext={handleNext}
        onOpenCommands={() => setShowCommands(true)}
        onOpenChannels={() => setShowChannels(true)}
        onOpenNetwork={() => setShowNetwork(true)}
      />

      {showCommands && <CommandsHelp onClose={() => setShowCommands(false)} />}
      {showChannels && <LocationChannels onClose={() => setShowChannels(false)} />}
      {showNetwork && <NetworkPeople onClose={() => setShowNetwork(false)} />}
    </div>
  )
}

export default App
