'use client'

import { links } from '@/config/links'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { FormEvent, useState } from 'react'
import { action } from '@/config/actions'

interface FormProps {
  children: React.ReactNode
}

interface PostFormProps extends FormProps {
  method: 'POST'
}

interface PutFormProps extends FormProps {
  method: 'PUT'
  name: string
}

const urls = (name: string | undefined) => ({
  POST: `${links.api}/api/v1/muscle-group`,
  PUT: `${links.api}/api/v1/muscle-group/${name}`,
})

const messages = {
  POST: {
    title: 'Muscle Group created',
    description: 'The muscle group was created successfully',
  },
  PUT: {
    title: 'Muscle Group updated',
    description: 'The muscle group was updated successfully',
  },
}

export function MuscleGroupForm<T extends PostFormProps | PutFormProps>(props: T) {
  const [form, setForm] = useState('')
  const { toast } = useToast()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form)
      return toast({
        title: 'Name is required',
        description: 'Please fill the name field',
        variant: 'destructive',
      })

    const name = 'name' in props ? props.name : undefined

    try {
      const res = await fetch(urls(name)[props.method], {
        method: props.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: form }),
      })
      const data = await res.json()

      if (!res.ok) throw data

      action('muscle-group')

      toast({
        title: messages[props.method].title,
        description: messages[props.method].description,
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
            className="col-span-3"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />
        </div>
        {props.children}
      </form>
    </>
  )
}
