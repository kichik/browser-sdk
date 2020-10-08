import { LogsGlobal } from '@cloudsnorkel/datadog-browser-logs'
import { RumGlobal } from '@cloudsnorkel/datadog-browser-rum'

declare global {
  interface Window {
    DD_LOGS?: LogsGlobal
    DD_RUM?: RumGlobal
  }

  namespace WebdriverIO {
    interface Config {
      e2eMode: string
    }
  }
}
