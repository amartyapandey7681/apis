let data = require('./data');

exports.cities = async(req,res)=>{



    return res.status(200).send({status:200 , cities : [
        "Lucknow",
        "New Delhi",
        "Agra",
        "Kolkata",
        "Chennai",
        "Banglore",
        "Dehradun",
        "Jaipur"
    ]})


}


exports.disease = async(req,res)=>{



    return res.status(200).send({status:200 , disease : [
        "Abdominal aortic aneurysm",
        "Acne",
        "Acute cholecystitis",
        "Acute lymphoblastic leukaemia",
        "Acute lymphoblastic leukaemia: Children",
        "Acute lymphoblastic leukaemia: Teenagers and young adults",
        "Acute myeloid leukaemia",
        "Acute myeloid leukaemia: Children",
        "Acute myeloid leukaemia: Teenagers and young adults",
        "Acute pancreatitis",
        "Addison's disease",
        "Alcohol-related liver disease",
        "Allergic rhinitis",
        "Allergies"
    ]})


}

exports.addData = async(req,res)=>{


    let body = req.body;
    let name = body.name;
    let city = body.city;
    let disease = body.disease;

    if(!name || !city || !disease){

        return res.status(404).send({"msg":"some data not found"});
    }


    try{

        await data.insertMany([{
            Name:name,
            City:city,
            Disease:disease
        }])
    }catch(err){

        console.log("err");
        return res.status(500).send({err:err});
    }

    return res.status(200).send({"msg":"success"});

}
exports.updateData = async(req,res)=>{


    let id = req.params.userId;
    let body = req.body;
    let name = body.name;
    let city = body.city;
    let disease = body.disease;

    if(!id){

        return res.status(404).send({"msg":"id not found"});
    }


    try{

        let x = await data.updateOne({id:id},{

            Name:name,
            City:city,
            Disease:disease

        });

    }catch(err){

        console.log("err");
        return res.status(500).send({err:err});
    }

    return res.status(200).send({"msg":"success"});


}

exports.getData = async(req,res)=>{

    let page =req.params.page;

    let d;

    try{    

        d = await data.aggregate([
            {
                '$match':{

                }
            },{

                '$skip':(page-1)*10
            },{
                
                '$limit':10
            }
        ]);


    }catch(err){

        return res.status(500).send({msg:err});
    }

    return res.status(200).send({data:d});
}