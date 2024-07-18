const { StatusCodes } = require("http-status-codes");
const { BookingService } =require("../services/index");


const bookingService = new BookingService()


const create =async (req,res) =>{
    try {
        const response = await bookingService.createBooking(req.body);

        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message: 'Successfully completed booking'
        });
        
    } catch(error){
        const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        return res.status(statusCode).json({
            data: {},
            success:false,
            message: error.message,
            err:error.explanation,
        });
    }
}



module.exports={
    create,
}