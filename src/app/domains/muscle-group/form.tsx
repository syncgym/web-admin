'use client'

import { reqApi } from '@/config/axios'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { useState } from 'react'

export function MuscleGroupForm({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()
  const [form, setForm] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form)
      return toast({
        title: 'Name is required',
        description: 'Please fill the name field',
        variant: 'destructive',
      })

    try {
      await reqApi.post('/api/v1/muscle-group', { name: form })

      toast({
        title: 'Muscle Group created',
        description: 'The muscle group was created successfully',
      })
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error?.response?.data?.message,
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            placeholder="ex: Dorsal"
            id="name"
            onChange={(e) => setForm(e.target.value)}
            value={form}
            className="col-span-3"
          />
        </div>
        {children}
      </form>
    </>
  )
}
