/**
 * Setup module barrel export
 * Exports the setup wizard functionality
 */

export { runSetupWizard, validateEnvironment } from "./wizard.js";
export type {
  ValidationResult,
  GeminiInstallCheck,
} from "./wizard.js";
