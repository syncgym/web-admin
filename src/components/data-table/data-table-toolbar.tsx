'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from './data-table-view-options'

import { DataTableFacetedFilter } from './data-table-faceted-filter'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { IconProps } from '@radix-ui/react-icons/dist/types'

export interface Filter {
  column: string
  title: string
  filters: {
    value: string
    label: string
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  }[]
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  dataFilters: Filter[]
}

export function DataTableToolbar<TData>({ table, dataFilters }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('title')?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {dataFilters.map(
          ({ column, title, filters }) =>
            table.getColumn(column) && (
              <DataTableFacetedFilter
                key={column}
                column={table.getColumn(column)}
                title={title}
                options={filters}
              />
            )
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
