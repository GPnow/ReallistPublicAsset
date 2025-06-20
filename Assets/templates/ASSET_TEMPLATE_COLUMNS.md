# Asset Bulk Import Template - Column Structure

## Required Columns
- **Name** - Asset name/identifier (Required)
- **Category** - Asset category (Required)
- **Purchase Cost (₹)** - Purchase price in INR (Required)
- **Useful Life (Months)** - Asset useful life in months (Required)

## Basic Information Columns
- **Location** - Asset location
- **Model** - Asset model
- **Manufacturer** - Asset manufacturer

## Purchase & Warranty Information
- **Purchase Date** - Date of purchase (Excel date format)
- **Warranty Period (Months)** - Warranty period in months
- **Salvage Value (₹)** - Salvage value in INR

## Maintenance Information
- **Last Maintaince Day** - Last maintenance date (Excel date format)
- **Next Maintainance Day** - Next maintenance date (Excel date format)

## Insurance Information
- **Has Insurance** - Whether asset has insurance (TRUE/FALSE)
- **Coverage Start** - Insurance coverage start date (Excel date format)
- **Coverage Expire** - Insurance coverage expiration date (Excel date format)
- **Insurance Amount (₹)** - Insurance coverage amount in INR
- **Insurance Payment (₹)** - Insurance payment amount in INR
- **Prev Payment Date** - Previous insurance payment date (Excel date format)
- **Next Payment Date** - Next insurance payment date (Excel date format)

## Rental & Sale Information
- **Is Rentable** - Whether asset is available for rent (TRUE/FALSE)
- **Rental Cost (₹) Daily** - Daily rental cost in INR
- **Is Sellable** - Whether asset is available for sale (TRUE/FALSE)
- **Sell Amount (₹)** - Sale price in INR

## Important Notes
- All date columns should use Excel date format
- Currency amounts should be numeric values only (no currency symbols)
- Boolean fields accept: TRUE/FALSE, Yes/No, 1/0
- **No marketplace listings will be created during bulk import** - assets are imported for internal management only
- To create marketplace listings, use the individual asset editing interface after import
- **Large file support**: The system can efficiently handle large uploads (400+ assets) using intelligent batching
- Progress will be tracked and reported for large uploads with detailed batch statistics

## Removed Columns (No longer needed)
- Type
- Sub Type  
- Condition
- Depreciation Expense (calculated automatically in backend) 