import { Request,Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { pet } from "../models/pet";

export const home = (req : Request, res:Response) => {
     res.render('pages/page', {
          menu: createMenuObject('todos'),
          banner: {
               tittle : 'Todos os animais', 
               background : 'allanimals.jpg'
          },
          list : pet.getAll()
     })
}

export const dog = (req: Request, res:Response) =>{
     res.render('pages/page', {
          menu : createMenuObject('dogs'),
          banner:{
               tittle : 'Cachorros', 
               background : 'banner_dog.jpg'
          },
          list : pet.getFromType('dog')
     })
}

export const cat = (req: Request, res:Response) =>{
     res.render('pages/page', {
          menu : createMenuObject('cats'),
          banner: {
               tittle : 'Gatos', 
               background : 'banner_cat.jpg'
          },
          list : pet.getFromType('cat')
     })
}

export const fish = (req: Request, res:Response) =>{
     res.render('pages/page' , {
          menu : createMenuObject('fishes'),
          banner: {
               tittle : 'Peixes', 
               background : 'banner_fish.jpg'
          },
          list : pet.getFromType('fish')
     })
}   