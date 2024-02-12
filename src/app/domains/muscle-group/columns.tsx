'use client'

import { ColumnDef } from '@tanstack/react-table'

export type MuscleGroup = { name: string }

export const columns: ColumnDef<MuscleGroup>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
]
