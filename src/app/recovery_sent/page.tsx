"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

const RecoveryPageSent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center bg-white">
      <form className="flex flex-col space-y-4 p-8 w-96" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center">  Recuperar Senha</h1>

        <p>Enviamos um link de recuperação para o seu e-mail cadastrado. Por favor, verifique a sua caixa de entrada e a pasta de spam, se necessário.</p>


        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
        <button type="submit" className="bg-orange-500 text-white p-2 rounded hover:bg-orange-500 transition duration-200 borderadios15">
          Enviar
        </button>

        <a href="/recovery_sent" className="text-blue-500 text-center hover:underline">Voltar ao Login</a>
      </form>
    </div>
  );
};

export default RecoveryPageSent;
