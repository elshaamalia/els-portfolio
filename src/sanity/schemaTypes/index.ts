import { type SchemaTypeDefinition } from 'sanity'
import project from './project' // Import file project tadi

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project], // Masukkan ke dalam array ini
}