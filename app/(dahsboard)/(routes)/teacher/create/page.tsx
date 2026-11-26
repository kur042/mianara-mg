"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
    Field,
    FieldDescription,
    FieldLegend,
    FieldSet,
    FieldGroup,
    FieldLabel,
    FieldError,
} from "@/components/ui/field"
import {
    Label,
} from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import toast from "react-hot-toast";


const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required',
    }),
});

const CreatePage = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
        },
    });

    const { isSubmitting, isValid} = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        try {
            const response = await axios.post('/api/course', values);
            router.push(`/teacher/courses/${response.data.id}`);
        } catch(e) {
            toast.error('something went wrong');
        }
    }


    return (
        <div className="max-w-5xl mx-auto flex md:items-center md:justify-center p-6">
            <div>
                <h1 className="text-2xl">Name your course</h1>
                <p className="text-sm text-slate-600">
                    What would you like to name your course? Don't worry, you can change this later</p>
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-8 mt-8">
                    <Controller  
                        name="title"
                        control={form.control} 
                        render={({field, fieldState}) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                                <Input
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Trading 101"
                                    disabled={isSubmitting}
                                />
                                <FieldDescription>
                                    What will you teach in this course?
                                </FieldDescription>
                                <FieldError />
                            </Field>
                        )}
                         />
                    
                    <div className="flex-items-center gap-x-2">
                        <Link href="/">
                            <Button type="button" variant='ghost'>Cancel</Button>
                        </Link>
                        <Button disabled={!isValid || isSubmitting} type="submit">
                            Continue
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePage;