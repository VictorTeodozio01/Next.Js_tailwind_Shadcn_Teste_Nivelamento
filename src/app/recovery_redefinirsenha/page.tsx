import * as React from "react"

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
} from "@/components/ui/select"

const RecoveryPageRedefinirSenha: React.FC = () => {
    return (
        <div>
            <div className="grid justify-center items-center min-h-screen cls8">
                <img
                    src="/logo2.png" // Certifique-se de que o caminho esteja correto
                    alt="Logo"
                    width="354px;"
                //className="mx-auto mb-4 w-24 h-24" // Ajuste as classes conforme necessário
                />
                <Card className="w-[350px] cls5">
                    <div className="flex justify-center items-center">
                        <CardHeader className="text-center">
                            <CardTitle>Redefinir Senha</CardTitle>
                            <CardDescription className="cls7">Redefina sua senha com no mínimo 6 caracteres</CardDescription>
                        </CardHeader>
                    </div>

                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="senha">Senha*</Label>
                                    <Input id="senha" className="cls6" placeholder="Digite uma senha" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="confirmesenha">Confirme Sua Senha*</Label>
                                    <Input id="confirmesenha" className="cls6" placeholder="Repita sua senha*" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="confirmesenha">Crie uma senha segura</Label>
                                    <CardDescription className="cls7">· use letras maiúsculas e minúsculas, símbolos e números;</CardDescription>
                                    <CardDescription className="cls7">· Não use informações pessoais como datas de aniversário;</CardDescription>
                                    <CardDescription className="cls7">· não use uma senha igual a anterior</CardDescription>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <br />
                <Button type="submit" className="bg-orange-500 text-white p-2 rounded hover:bg-orange-500 transition duration-200 borderadios15 ">
                    Redefinir Senha
                </Button>
            </div>
        </div>

    )
}

export default RecoveryPageRedefinirSenha;


/*import { Button } from "@/components/ui/button"
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
} from "@/components/ui/select"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const RecoveryPageRedefinirSenha: React.FC = () => {
    

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const router = useRouter();
    
    return (
        <div></div>
                <div className="flex items-center justify-center min-h-screen bg-white">
                    <form className="flex flex-col space-y-4 p-8 bg-white  w-96">
                        <img
                            src="/logo2.png" // Certifique-se de que o caminho esteja correto
                            alt="Logo"
                        //className="mx-auto mb-4 w-24 h-24" // Ajuste as classes conforme necessário
                        />
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Redefinir Senha</CardTitle>
                                <CardDescription>Redefina sua senha com no mínimo 6 caracteres</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="senha">Senha*</Label>
                                            <Input id="senha" placeholder="Digite uma senha" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="confirmesenha">Confirme Sua Senha*</Label>
                                            <Input id="confirmesenha" placeholder="Repita sua senha*" />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Cancel</Button>
                                <Button>Deploy</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </div>

    )
};

export default RecoveryPageRedefinirSenha;
*/