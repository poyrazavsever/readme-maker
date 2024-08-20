import { useRouter } from 'next/router'
import { IoCaretBackCircle } from "react-icons/io5";

// Previews
import Preview1 from '@/components/templates/Template1/Preview1';

function Preview() {
    const router = useRouter()

    const id = router.query.id
    
    return (
        <div className="h-full bg-gray-950 p-8">

            <div className='w-full flex items-end gap-32 py-6'>

                <h2 className='text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-wider text-zinc-200'>Template ID: {id} </h2>

                <a href='/' className='flex items-center gap-2 text-slate-300 hover:text-slate-500 transition-all text-lg font-semibold'>
                    <IoCaretBackCircle />
                    <span>Back</span>
                </a>

            </div>

            {id == 1 &&
                <Preview1 />
            }

        </div>
    )
}

export default Preview