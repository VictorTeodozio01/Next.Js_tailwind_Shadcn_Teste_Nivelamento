"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      setSuccessMessage('');
      return; 
    }
    const response = await fetch('http://localhost:5116/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const token = (await response.json()).token;
      localStorage.setItem('token', token);
      setSuccessMessage('Login realizado com sucesso!'); 
      setErrorMessage(''); 
      //router.push('/');
    } else {
      setErrorMessage('E-mail ou senha inválidos.');
      setSuccessMessage(''); 
    }
  };

  const openDialog = () => {
    setIsDialogOpen(true);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSendEmail = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ 
      return setErrorMessage('E-mail inválido.');
    }
    
    const isEmailValid = false; 
    
    if (!isEmailValid) {
      setErrorMessage('E-mail não cadastrado.');
      setSuccessMessage(''); 
    } else {
      setSuccessMessage('E-mail enviado com sucesso!'); 
      setErrorMessage('');
    }
  };

  const handleForgotPasswordClick = () => {
    window.matchMedia("(max-width: 768px)").matches ? router.push('/recovery') : openDialog();
  };

  return (
    <div className="md:flex md:space-y-0 md:space-x-4 bg-white">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Recuperar Senha</DialogTitle>
            <DialogDescription>
              Para recuperar sua senha, digite o email cadastrado.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" placeholder="mail.example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errorMessage && <p className="text-red-500">{errorMessage}</p>} 
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button type="button" variant="secondary" className='width100 bg-orange-500 text-white p-2 rounded hover:bg-orange-700 transition duration-200 borderadios15' onClick={handleSendEmail}>
              Enviar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="cls10 flex items-center justify-center min-h-screen bg-white">
        <form className="flex flex-col space-y-4 p-8 bg-white w-96" onSubmit={handleSubmit}>
          <img
            src="/logo2.png" 
            alt="Logo"
          />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" placeholder="mail.example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="senha">Senha</Label>
            <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <a href="#" onClick={handleForgotPasswordClick} className="text-blue-500">Esqueci minha senha</a>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} 
          {successMessage && <p className="text-green-500">{successMessage}</p>} 
          <Button type="submit" className="bg-orange-500 text-white p-2 rounded hover:bg-orange-700 transition duration-200 borderadios15">
            Entrar
          </Button>
        </form>
      </div>
      <div className="flex items-center justify-center min-h-screen cls9">
        <div className="flex justify-center w-full">
          <img
            src="/logo1.png"
            alt="Logo"
            width={'514px'}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;