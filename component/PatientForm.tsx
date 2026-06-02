"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
    userName: z
        .string()
        .min(5, "Username must be at least 5 characters.")
        .max(32, "Username must be at most 32 characters."),
    email:z
        .string()
        .regex(/^[0-9]+$/, "Phone number must contain only digits")
        .email("Enter a valid email address")
        .max(60,"Email Must be 60 characters maximum"),
    mobile:z
        .string()
        .min(8,"Mobile Number must be at least 8 characters")
        .max(15,"Username must be at most 32 characters."),
})

const PatientForm =()=> {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: "",
            email:"",
            mobile:""

        },
    })

    // submit handler
    function onSubmit(data: z.infer<typeof formSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
    }

    return (
        <Card className="w-full sm:max-w-md bg-transparent">
            <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup className="border-none">
                        <Controller
                            name="userName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title " className="text-white font-bold">
                                        Full Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter Full Name"
                                        autoComplete="off"
                                        className="focus-visible:border-emerald-500 focus-visible:ring-emerald-500 focus-visible:shadow-[0_0_15px_rgba(16,185,129,0.45)] transition-all duration-200 text-slate-100"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}

                                </Field>

                            )}
                        />

                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title text-white" className="text-white font-bold">
                                        E-mail
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter Full Name"
                                        autoComplete="off"
                                        className="focus-visible:border-emerald-500 focus-visible:ring-emerald-500 focus-visible:shadow-[0_0_15px_rgba(16,185,129,0.45)] transition-all duration-200 text-slate-100"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}

                                </Field>

                            )}
                        />

                        <Controller
                            name="mobile"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title text-white" className="font-bold text-white">
                                        Phone Number
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter Full Name"
                                        autoComplete="off"
                                        className="focus-visible:border-emerald-500 focus-visible:ring-emerald-500 focus-visible:shadow-[0_0_15px_rgba(16,185,129,0.45)] transition-all duration-200 text-slate-100"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}

                                </Field>

                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>

            <CardFooter className="bg-transparent border-0">
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="form-rhf-demo" className="bg-emerald-500">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}

export default PatientForm;
