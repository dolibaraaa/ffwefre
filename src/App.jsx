import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import LocationPermission from './components/LocationPermission'
import BluetoothPermission from './components/BluetoothPermission'
import NotificationPermission from './components/NotificationPermission'
import BluetoothSetup from './components/BluetoothSetup'

function App() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { component: WelcomeScreen, name: 'welcome' },
    { component: LocationPermission, name: 'location' },
    { component: BluetoothPermission, name: 'bluetooth' },
    { component: NotificationPermission, name: 'notification' },
    { component: BluetoothSetup, name: 'setup' }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const CurrentComponent = steps[currentStep].component

  return (
    <div className="app">
      <CurrentComponent onNext={handleNext} />
    </div>
  )
}

export default App
