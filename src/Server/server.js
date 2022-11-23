import { Server} from "miragejs"
import {defaultTag, tags} from "../assets/const";

export default function makeServer({ environment = "development" } = {}) {

    let server=new Server({
        routes(){
            this.get('/tags',()=>{
                return tags
            })
            this.get('/default-tags',()=>{
                return defaultTag
            })
        }
    })

    return server
}