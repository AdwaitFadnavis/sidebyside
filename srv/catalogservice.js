const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(srv){

    const { SalesOrder } = this.entities;

srv.on('READ',SalesOrder, async(req,res)=>{
    const { opApiSalesOrderSrv } = require('./sales-order-api/OP_API_SALES_ORDER_SRV');
    console.log('Mai aa gya');
})


})