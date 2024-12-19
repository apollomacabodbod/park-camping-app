"use client"

import * as React from "react"
import { format } from "date-fns"

import { cn } from "src/lib/utils"
import { Button } from "src/components/button"
import { Calendar } from "src/components/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/popover"

export function DatePickerCheckOut() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full flex items-center justify-between border-0 border-b-2 border-b-[rgba(16,34,29,0.60)] py-[2em] px-[0em] rounded-[0em] hover:bg-white",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            <span className="text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">
              {format(date, "dd/MM/yyyy")}
            </span>
          ) : (
            <span className="text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">Check-out</span>
          )}
          <img src="/home-book-now.svg" alt="" width={14} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
