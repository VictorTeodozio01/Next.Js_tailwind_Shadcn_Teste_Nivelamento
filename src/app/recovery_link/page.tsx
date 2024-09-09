"use client";


import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const RecoveryPageLink: React.FC = () => {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };
    return (
        <div>
            <div className='pagetop'><img src="/logo1.png" alt="Logo" /></div>
            <div className='flex justify-center items-center min-h-screen cls3'>
                <Card className="w-[350px] cls2">
                    <CardHeader>
                        <CardDescription>olá</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>crie uma senha de acesso clicando no link abaixo</CardDescription>
                    </CardContent>
                    <CardContent>
                        <CardDescription> <a href="" className="text-[blue]">https://trajetonbdchabvuyhbvayrbvyubrvyhv.senha</a></CardDescription>
                    </CardContent>
                    <CardContent>
                        <CardDescription> <a href="" className="text-[#F97316]">O link expira em 24 horas</a></CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
};

export default RecoveryPageLink;