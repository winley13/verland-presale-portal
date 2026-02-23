import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, polygon, arbitrum } from '@reown/appkit/networks'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const projectId = 'b5ca09c8577900b9982fd8c18742880c'

const metadata = {
  name: 'Neoverse Presale',
  description: 'Neoverse Land Presale Portal',
  url: window.location.origin,
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const networks = [mainnet, polygon, arbitrum] as const
const wagmiAdapter = new WagmiAdapter({
  networks: networks as any,
  projectId,
  ssr: false
})

createAppKit({
  adapters: [wagmiAdapter],
  networks: networks as any,
  projectId,
  metadata,
  features: {
    analytics: true
  },
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#B6FE05',
    '--w3m-border-radius-master': '12px'
  }
})

const queryClient = new QueryClient()

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}