import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as AccordionPremitive from '@radix-ui/react-accordion';
import cn from 'classnames';

const items = [
  {
    id: 1,
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 2,
    title: 'Is it unstyled?',
    content: `Yes. It's unstyled by default, giving you freedom over the look and feel.`,
  },
  {
    id: 3,
    title: 'Can it be animated?',
    content: 'Yes! You can animate the Accordion with CSS or JavaScript.',
  },
];

// Your app...
export default function Accordion({ className }) {
  return (
    <AccordionPremitive.Root
      type="single"
      defaultValue={items[0].id}
      className={cn('space-y-0.5', className)}
    >
      {items.map((item) => (
        <AccordionPremitive.Item value={item.id} key={item.id} className="">
          <AccordionPremitive.Trigger className="flex items-center justify-between w-full">
            <span>{item.title}</span> <ChevronDownIcon />
          </AccordionPremitive.Trigger>

          <AccordionPremitive.Content className="bg-[#f9f8f9]">
            <div className="py-4 px-5">{item.content}</div>
          </AccordionPremitive.Content>
        </AccordionPremitive.Item>
      ))}
    </AccordionPremitive.Root>
  );
}
