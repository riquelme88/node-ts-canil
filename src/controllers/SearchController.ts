import { Request,Response } from "express";
import { pet } from "../models/pet";
import { url } from "inspector";

export const search = (req : Request, res: Response) =>{
    let nome = req.query.q as string;
    res.render('pages/page',{
        list : pet.getFromName(nome) ,
        nome
    })
}