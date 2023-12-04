# NetworkInsightClientApp

### Project Title

Network Insight


## Introduction

An Application responsible for parsing,loading,aggregating and visualizing teleco data.
The Applications starts by watching files in a local directory  C:\Users\User\Desktop\IMS\Input and checks for all txt files that exists in that directory, 
if the file exists as already Parsed in the parsed directory it will delete the file, if not it will start processing it by sending the name of the file to the parser.
The parser reads,writes and filters and the data to an output CSV file inside the output Directory and moves the input file to the parsed directory.
Once the output file is in the output directory parsed and ready, the loader will check file name, create and copy data into the DataBase.
Once the data is loaded into the dataBase, the output file will be deleted and the data in the DB will be aggregated into hourly/daily and groupedBy aggregated fields.
In the UI when we start the Application, the webpage will present data according to default values. On change for any selected option, the data will re-render and we will request again data from the backend according to the selected Options.

Technologies Used

- .NET Core 
- ASP.NET Core
- Entity Framework Core
-React(TypeScript)
- Node.js (for npm packages)

## Package References
 
The project uses the following  packages:
CsvHelper (version 30.0.1):

A library for reading and writing CSV files.
Microsoft.AspNetCore.OpenApi (version 7.0.12):

Provides integration with Swagger and OpenAPI for documenting and testing APIs.
Microsoft.VisualStudio.Azure.Containers.Tools.Targets (version 1.19.4):

Azure Container Tools for Visual Studio; facilitates containerized development and deployment to Azure. //was not used
Swashbuckle.AspNetCore (version 6.5.0):

Adds Swagger/OpenAPI documentation to ASP.NET Core APIs.
System.Data.Odbc:

ODBC (Open Database Connectivity) support for .NET applications.


### Installation

Provide step-by-step instructions on how to install project dependencies.

1. Clone the repository:
   git clone https://github.com/hsenbdeir/NetworkInsight // For Backend
   git clone https://github.com/hsenbdeir/NetworkInsightClientApp  // For FrontEnd

2. Navigate to the project folder:
   cd NetworkInsight
   cd NetworkInsightClientApp

3. Install backend dependencies:
   For Backend:
  dotnet restore


4. Install frontend dependencies:

   cd ClientApp
   npm install


## Running the Application

### Backend (API)

dotnet run

### Frontend (React)

cd ClientApp
npm start


