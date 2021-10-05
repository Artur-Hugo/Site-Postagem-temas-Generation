import { Postagem } from "./Postagem"

export class Usuario{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public dataNascimento: Date
    public tipo: string
    public foto: string
    public postagem: Postagem[]
}