'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ColumnDef } from '@tanstack/react-table'
import { MuscleGroupForm } from './form'
import { links } from '@/config/links'
import { action } from '@/config/actions'
import { toast } from '@/components/ui/use-toast'

async function handleDelete(name: string) {
  try {
    const res = await fetch(`${links.api}/api/v1/muscle-group/${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()

    if (!res.ok) throw data

    action('muscle-group')

    toast({
      title: 'Muscle Group deleted',
      description: `The muscle group ${name} has been deleted`,
    })
  } catch (error: any) {
    console.error(error)

    toast({
      title: 'Error',
      description: error?.message,
      variant: 'destructive',
    })
  }
}

export type MuscleGroup = { name: string }

export const columns: ColumnDef<MuscleGroup>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => <div className="w-[550px] 2xl:w-[950px]">{row.getValue('name')}</div>,
  },
  {
    id: 'edit',
    cell: ({ row }) => (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-20" variant="outline">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-zinc-900">
          <DialogHeader>
            <DialogTitle>Edit Muscle Group - {row.getValue('name')}</DialogTitle>
            <DialogDescription>
              Edit the name of the muscle group and click confirm to save the changes
            </DialogDescription>
          </DialogHeader>
          <MuscleGroupForm method="PUT" name={row.getValue('name')}>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit">Confirm</Button>
              </DialogClose>
            </DialogFooter>
          </MuscleGroupForm>
        </DialogContent>
      </Dialog>
    ),
  },
  {
    id: 'delete',
    cell: ({ row }) => (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-20" variant="destructive">
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-zinc-900">
          <DialogHeader>
            <DialogTitle>Delete Muscle Group - {row.getValue('name')}</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently delete this muscle
              group?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" onClick={() => handleDelete(row.getValue('name'))}>
                Confirm
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  },
]
