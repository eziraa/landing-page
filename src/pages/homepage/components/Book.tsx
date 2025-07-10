import { motion } from "framer-motion";

// components/ui/Label.tsx
export function Label({ htmlFor, children, className = "" }: { htmlFor: string; children: React.ReactNode; className?: string }) {
    return (
      <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 dark:text-white ${className}`}>
        {children}
      </label>
    );
  }
  
  // components/ui/Input.tsx
  export function Input({ id, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
      <input
        id={id}
        className="w-full px-4 py-1 dark:bg-slate-600 text-slate-100 border border-gray-300 dark:border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
        {...props}
      />
    );
  }
  
  // components/ui/Textarea.tsx
  export function Textarea({ id, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
      <textarea
        id={id}
        className="w-full px-4 py-2 dark:bg-slate-600 text-slate-100 border border-gray-300 dark:border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
        {...props}
      />
    );
  }
  
  // components/ui/Button.tsx
  export function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button
        className={`bg-[#03b5a6] hover:bg-[#047857] text-white font-semibold px-6 py-2 rounded-md transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  // components/ui/Card.tsx
  export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
      <div className={`rounded-lg shadow-lg bg-white dark:bg-gray-900 ${className}`}>{children}</div>
    );
  }
  
  // components/ui/CardContent.tsx
  export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`p-6 sm:p-8 ${className}`}>{children}</div>;
  }
  
  
  export default function BookInspectionModal({ onClose }: { onClose: () => void }) {
    return (
      <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[5000] p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full dark:bg-[#232226]rounded-md    relative max-w-xl"
          onClick={e=>e.stopPropagation()}
        >
          <Card className=" overflow-y-auto max-h-[94vh]">
            <CardContent>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Request Your Free Inspection</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Smith" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="0400 000 000" required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <Label htmlFor="address">Property Address *</Label>
                  <Input id="address" placeholder="123 Main St, Sydney NSW 2000" required />
                </div>
                <div>
                  <Label htmlFor="pestType">Type of Pest Problem</Label>
                  <select
                    id="pestType"
                    className="w-full mt-1 px-3 py-1 dark:bg-slate-600 text-slate-100 border border-gray-300 dark:border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option className="dark:bg-black dark:text-slate-100" value="">Select pest type (optional)</option>
                    <option className="dark:bg-black dark:text-slate-100" value="termites">Termites</option>
                    <option className="dark:bg-black dark:text-slate-100" value="cockroaches">Cockroaches</option>
                    <option className="dark:bg-black dark:text-slate-100" value="rodents">Rodents</option>
                    <option className="dark:bg-black dark:text-slate-100" value="ants">Ants</option>
                    <option className="dark:bg-black dark:text-slate-100" value="wasps">Wasps</option>
                    <option className="dark:bg-black dark:text-slate-100" value="general">General inspection</option>
                    <option className="dark:bg-black dark:text-slate-100" value="other">Other</option>
                  </select>
                </div>
                </div>  
                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea id="message" rows={3} placeholder="Tell us more about your pest problem..." />
                </div>
                <Button type="submit" className="w-full rounded-md text-lg py-2">
                  Book My Free Inspection
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to be contacted by Ecovia Pest Control regarding your inspection request.
                </p>
              </form>
              <button onClick={onClose} className="absolute right-4 top-4 md:top-4 md:right-4 text-gray-500 hover:text-gray-800 dark:text-white">
                &#10005;
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }
  