'use client'

import { Filter } from '@/components/data-table/data-table-toolbar'
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons'

export const dataFilters = [
  {
    column: 'status',
    title: 'Status',
    filters: [
      {
        value: 'backlog',
        label: 'Backlog',
        icon: QuestionMarkCircledIcon,
      },
      {
        value: 'todo',
        label: 'Todo',
        icon: CircleIcon,
      },
      {
        value: 'in progress',
        label: 'In Progress',
        icon: StopwatchIcon,
      },
      {
        value: 'done',
        label: 'Done',
        icon: CheckCircledIcon,
      },
      {
        value: 'canceled',
        label: 'Canceled',
        icon: CrossCircledIcon,
      },
    ],
  },
  {
    column: 'priority',
    title: 'Priority',
    filters: [
      {
        label: 'Low',
        value: 'low',
        icon: ArrowDownIcon,
      },
      {
        label: 'Medium',
        value: 'medium',
        icon: ArrowRightIcon,
      },
      {
        label: 'High',
        value: 'high',
        icon: ArrowUpIcon,
      },
    ],
  },
] satisfies Filter[]
