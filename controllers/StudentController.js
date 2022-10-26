class StudentController{
    static display = async(req,res)=> {
        try{
            res.send('display')
        }catch(err){
            console.log(err)
        }
    }
    static create = async(req,res)=> {
        try{
            res.send('create')
        }catch(err){
            console.log(err)
        }
    }
    static view = async(req,res)=> {
        try{
            res.send('view')
        }catch(err){
            console.log(err)
        }
    }
    static edit = async(req,res)=> {
        try{
            res.send('edit')
        }catch(err){
            console.log(err)
        }
    }
    static delete = async(req,res)=> {
        try{
            res.send('delete')
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = StudentController