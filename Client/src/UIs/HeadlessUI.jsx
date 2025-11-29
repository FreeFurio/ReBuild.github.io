import { useState } from 'react'
import {
  Dialog, DialogPanel, DialogTitle,
  Disclosure, DisclosureButton, DisclosurePanel,
  Listbox, ListboxButton, ListboxOption, ListboxOptions,
  Menu, MenuButton, MenuItem, MenuItems,
  Popover, PopoverButton, PopoverPanel,
  RadioGroup, RadioGroupOption,
  Switch, Tab, TabGroup, TabList, TabPanel, TabPanels,
  Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption,
  Transition, TransitionChild,
  Field, Label, Description
} from '@headlessui/react'
import { ChevronDownIcon, CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

const countries = ['USA', 'Canada', 'UK', 'Germany', 'France', 'Japan', 'Australia']
const plans = [
  { id: 'basic', name: 'Basic', price: '$9/mo', description: 'Perfect for individuals' },
  { id: 'pro', name: 'Pro', price: '$19/mo', description: 'Great for small teams' },
  { id: 'enterprise', name: 'Enterprise', price: '$49/mo', description: 'For large organizations' }
]

export function HeadlessUI() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)
  const [agreed, setAgreed] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedPlan, setSelectedPlan] = useState(plans[0])
  const [query, setQuery] = useState('')
  const [comboboxValue, setComboboxValue] = useState('')

  const filteredCountries = query === '' ? countries : countries.filter(country =>
    country.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Complete Headless UI Components Showcase
      </h1>

      <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
        <TabList className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-8">
          <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 data-[selected]:bg-white data-[selected]:shadow">
            Form Components
          </Tab>
          <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 data-[selected]:bg-white data-[selected]:shadow">
            Navigation & Layout
          </Tab>
          <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 data-[selected]:bg-white data-[selected]:shadow">
            Overlays & Feedback
          </Tab>
        </TabList>

        <TabPanels>
          {/* Form Components Tab */}
          <TabPanel className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Form Components</h2>

            {/* Switch Components */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Switch Components</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Email notifications</span>
                  <Switch
                    checked={notifications}
                    onChange={setNotifications}
                    className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 data-[checked]:bg-blue-600"
                  >
                    <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5" />
                  </Switch>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Terms and Conditions</span>
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 data-[checked]:bg-blue-600"
                  >
                    <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5" />
                  </Switch>
                </div>
              </div>
            </div>

            {/* Combobox */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Combobox (Searchable Select)</h3>
              <Combobox value={selectedCountry} onChange={setSelectedCountry}>
                <div className="relative">
                  <ComboboxInput
                    className="w-full p-3 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    displayValue={(country) => country}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search country..."
                  />
                  <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  </ComboboxButton>
                  <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    {filteredCountries.map((country) => (
                      <ComboboxOption
                        key={country}
                        className="relative cursor-default select-none py-2 pl-10 pr-4 data-[focus]:bg-blue-600 data-[focus]:text-white"
                        value={country}
                      >
                        <span className="block truncate font-normal data-[selected]:font-medium">
                          {country}
                        </span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                </div>
              </Combobox>
            </div>

            {/* Listbox */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Listbox (Select Dropdown)</h3>
              <Listbox value={selectedPlan} onChange={setSelectedPlan}>
                <div className="relative">
                  <ListboxButton className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                    <span className="block truncate">{selectedPlan.name} - {selectedPlan.price}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    </span>
                  </ListboxButton>
                  <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    {plans.map((plan) => (
                      <ListboxOption
                        key={plan.id}
                        className="relative cursor-default select-none py-2 pl-10 pr-4 data-[focus]:bg-blue-600 data-[focus]:text-white"
                        value={plan}
                      >
                        <div>
                          <span className="block truncate font-normal data-[selected]:font-medium">
                            {plan.name} - {plan.price}
                          </span>
                          <span className="block text-sm text-gray-500 data-[focus]:text-blue-200">
                            {plan.description}
                          </span>
                        </div>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

            {/* RadioGroup */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Radio Group</h3>
              <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
                <RadioGroup.Label className="text-base font-medium text-gray-900 mb-3">
                  Choose your plan:
                </RadioGroup.Label>
                <div className="space-y-2">
                  {plans.map((plan) => (
                    <RadioGroupOption
                      key={plan.id}
                      value={plan}
                      className="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none data-[focus]:bg-blue-600 data-[focus]:text-white data-[checked]:bg-blue-600 data-[checked]:text-white border border-gray-200"
                    >
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label className="font-medium">
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description className="inline text-gray-500 data-[checked]:text-blue-100">
                              <span>{plan.price} - {plan.description}</span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        <div className="shrink-0 text-white data-[checked]:flex [.group:not([data-checked])_&]:invisible">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      </div>
                    </RadioGroupOption>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Field Component */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Field Components</h3>
              <div className="space-y-4">
                <Field>
                  <Label className="text-sm font-medium text-gray-700">Full Name</Label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
                    placeholder="Enter your full name"
                  />
                  <Description className="text-sm text-gray-500">
                    This will be displayed on your profile.
                  </Description>
                </Field>
                
                <Field>
                  <Label className="text-sm font-medium text-gray-700">Email</Label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
                    placeholder="Enter your email"
                  />
                </Field>
              </div>
            </div>
          </TabPanel>

          {/* Navigation & Layout Tab */}
          <TabPanel className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Navigation & Layout</h2>

            {/* Menu */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Menu (Dropdown)</h3>
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Options
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      <button className="group flex w-full items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                        Edit Profile
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                        Settings
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                        Sign out
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>

            {/* Popover */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Popover</h3>
              <Popover className="relative">
                <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 bg-white px-3 py-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Solutions
                  <ChevronDownIcon className="h-5 w-5" />
                </PopoverButton>
                <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <span className="text-2xl">📊</span>
                        </div>
                        <div>
                          <a href="#" className="font-semibold text-gray-900">
                            Analytics
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">Get a better understanding of your traffic</p>
                        </div>
                      </div>
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <span className="text-2xl">🔒</span>
                        </div>
                        <div>
                          <a href="#" className="font-semibold text-gray-900">
                            Security
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">Your customers' data will be safe and secure</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
            </div>

            {/* Disclosure */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Disclosure (Collapsible)</h3>
              <div className="space-y-2">
                <Disclosure>
                  <DisclosureButton className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span>What is your refund policy?</span>
                    <ChevronDownIcon className="h-5 w-5 text-blue-500 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.
                  </DisclosurePanel>
                </Disclosure>
                
                <Disclosure>
                  <DisclosureButton className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <ChevronDownIcon className="h-5 w-5 text-blue-500 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Yes! We offer 24/7 technical support via email and live chat for all our customers.
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </TabPanel>

          {/* Overlays & Feedback Tab */}
          <TabPanel className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Overlays & Feedback</h2>

            {/* Dialog */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Dialog (Modal)</h3>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Open Dialog
              </button>
            </div>

            {/* Transition Examples */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Transition Effects</h3>
              <p className="text-sm text-gray-600 mb-4">
                Transitions are built into most Headless UI components automatically. 
                They provide smooth enter/exit animations for popovers, dialogs, and other overlay components.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="font-medium mb-2">Fade Transition</h4>
                  <p className="text-sm text-gray-600">Used in Dialog overlays</p>
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="font-medium mb-2">Scale Transition</h4>
                  <p className="text-sm text-gray-600">Used in Popover panels</p>
                </div>
              </div>
            </div>

            {/* Component Status */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Component Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Switch</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Fully implemented</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Combobox</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Fully implemented</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Listbox</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Fully implemented</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">RadioGroup</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Fully implemented</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Menu</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Fully implemented</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Dialog</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Fully implemented</p>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      {/* Dialog Modal */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="max-w-md mx-auto bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <DialogTitle className="text-lg font-medium">Confirm Action</DialogTitle>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              This is a sample dialog showing how Headless UI Dialog component works with proper accessibility features.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
