import { Request, Response } from 'express';

export function login(req: Request, res: Response) {
    console.log('Login body: ', req.body);
    res.send({token: 'klsadfkjladlf4kjasd'});
}

export function signup(req: Request, res: Response) {
    console.log('Signup body: ', req.body);
    res.send();
}