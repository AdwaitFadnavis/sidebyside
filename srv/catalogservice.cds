using {OP_API_SALES_ORDER_SRV as external} from './external/OP_API_SALES_ORDER_SRV.csn';

service catalogservice {

    entity SalesOrder as projection on external.A_SalesOrder {
        SalesOrder,
        SalesOrganization,
        SalesOrderType,
        SoldToParty
    };

}
