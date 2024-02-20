import { links } from '@/config/links'
import { MuscleGroup, columns } from './columns'
import { DataTable } from '@/components/data-table/data-table'
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
import { Button } from '@/components/ui/button'
import { MuscleGroupForm } from './form'

export default async function MuscleGrorpDomain() {
  const res = await fetch(`${links.api}/api/v1/muscle-group`, {
    cache: 'no-cache',
    next: {
      tags: ['muscle-group'],
    },
  })
  const { data }: { data: string[] } = await res.json()

  const formattedData = data.map((item) => ({ name: item })) satisfies MuscleGroup[]

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="absolute right-8" variant="outline">
            Create Muscle Group
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-zinc-900">
          <DialogHeader>
            <DialogTitle>Create new Muscle Group</DialogTitle>
            <DialogDescription>
              Please enter the name of the muscle group you want to create.
            </DialogDescription>
          </DialogHeader>
          <MuscleGroupForm method="POST">
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
      <DataTable data={formattedData} columns={columns} />
    </>
  )
}
