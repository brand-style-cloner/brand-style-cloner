import * as React from "react"
import * as RadixSelect from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

export interface SelectProps extends RadixSelect.SelectProps {
  options: { value: string; label: string; description?: string }[]
  placeholder?: string
  className?: string
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ options, placeholder, className, ...props }, ref) => (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        ref={ref}
        className={cn(
          "flex items-center justify-between w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
          className
        )}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="z-50 rounded-lg border border-gray-200 bg-white shadow-xl mt-2 animate-in fade-in-0 zoom-in-95">
          <RadixSelect.Viewport className="p-1">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value}
                value={option.value}
                className={cn(
                  "flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm outline-none transition-colors hover:bg-blue-50 data-[state=checked]:bg-blue-100 data-[state=checked]:text-blue-700",
                  option.value === "" && "text-gray-400"
                )}
              >
                <RadixSelect.ItemText>
                  <span className="font-medium">{option.label}</span>
                  {option.description && (
                    <span className="block text-xs text-gray-500 font-normal">{option.description}</span>
                  )}
                </RadixSelect.ItemText>
                <RadixSelect.ItemIndicator className="ml-auto">
                  <Check className="h-4 w-4 text-blue-600" />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
)
Select.displayName = "Select" 