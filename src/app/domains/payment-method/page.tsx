import { promises as fs } from 'fs'
import path from 'path'
import { z } from 'zod'

import { columns } from './columns'
import { DataTable } from '@/components/data-table/data-table'
import { taskSchema } from './data/schema'
import { dataFilters } from './data-filters'

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/app/domains/payment-method/data/tasks.json')
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function PaymentMethodPage() {
  const tasks = await getTasks()

  return <DataTable dataFilters={dataFilters} data={tasks} columns={columns} />
}
