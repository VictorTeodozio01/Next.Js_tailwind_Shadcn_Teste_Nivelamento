"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
const RecoveryPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const isEmailRegistered = false;

    if (!isEmailRegistered) {
      setErrorMessage('E-mail inválido. Este endereço de e-mail não está cadastrado no sistema, verifique e tente novamente.');
    } else {
      setErrorMessage('');
      console.log("Email para recuperação:", email);
      alert("Instruções de recuperação de senha enviadas para " + email);
      router.push('/');
    }
  };

  return (
    <div className="flex items-center justify-center bg-white">
      <form className="flex flex-col space-y-4 p-8 w-96" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center">  Recuperar Senha</h1>

        <p>Para recuperar sua senha, digite o email cadastrado.</p>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" id="email" placeholder="mail.example@gmail.com" />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
        <button type="submit" className="bg-orange-500 text-white p-2 rounded hover:bg-orange-500 transition duration-200 borderadios15">
          Enviar
        </button>

        <a href="/login" className="text-blue-500 text-center hover:underline">Voltar ao Login</a>
      </form>
    </div>
  );
};

export default RecoveryPage;