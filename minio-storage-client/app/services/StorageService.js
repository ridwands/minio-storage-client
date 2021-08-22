module.exports.list_objects = async (req)=>{
    try{
        let expired =10*60 // 10 Minutes 600 Second
        if (req.body.type=="GET"){
            var res = await req.minio.presignedUrl('GET', req.body.bucket, req.body.name, expired)
        }else{
            var res = await req.minio.presignedPutObject(req.body.bucket, req.body.name, expired)
        }
        var data = {
            url : res
        }
        response={
            code: 200,
            message: 'success',
            data: data
        }
        return response
    }catch(err){
        console.error(err)
        throw(err)
    }
}