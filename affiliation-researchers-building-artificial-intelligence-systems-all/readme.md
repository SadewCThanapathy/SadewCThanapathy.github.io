# Affiliation of research teams building notable AI systems, by year of publication - Data package

This data package contains the data that powers the chart ["Affiliation of research teams building notable AI systems, by year of publication"](https://ourworldindata.org/grapher/affiliation-researchers-building-artificial-intelligence-systems-all?v=1&csvType=full&useColumnShortNames=false) on the Our World in Data website. It was downloaded on August 23, 2026.

### Active Filters

A filtered subset of the full data was downloaded. The following filters were applied:

## CSV Structure

The high level structure of the CSV file is that each row is an observation for an entity (usually a country or region) and a timepoint (usually a year).

The first two columns in the CSV file are "Entity" and "Code". "Entity" is the name of the entity (e.g. "United States"). "Code" is the OWID internal entity code that we use if the entity is a country or region. For most countries, this is the same as the [iso alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code of the entity (e.g. "USA") - for non-standard countries like historical countries these are custom codes.

The third column is either "Year" or "Day". If the data is annual, this is "Year" and contains only the year as an integer. If the column is "Day", the column contains a date string in the form "YYYY-MM-DD".

The final column is the data column, which is the time series that powers the chart. If the CSV data is downloaded using the "full data" option, then the column corresponds to the time series below. If the CSV data is downloaded using the "only selected data visible in the chart" option then the data column is transformed depending on the chart type and thus the association with the time series might not be as straightforward.


## Metadata.json structure

The .metadata.json file contains metadata about the data package. The "charts" key contains information to recreate the chart, like the title, subtitle etc.. The "columns" key contains information about each of the columns in the csv, like the unit, timespan covered, citation for the data etc..

## About the data

Our World in Data is almost never the original producer of the data - almost all of the data we use has been compiled by others. If you want to re-use data, it is your responsibility to ensure that you adhere to the sources' license and to credit them correctly. Please note that a single time series may have more than one source - e.g. when we stich together data from different time periods by different producers or when we calculate per capita metrics using population data from a second source.

## Detailed information about the data


## Annual number of AI systems by researcher affiliation
Describes the sector where the authors of a notable AI system have their primary affiliations. The 2026 data is incomplete and was last updated 19 August 2026.
Last updated: March 12, 2025  
Next update: September 2026  
Date range: 1950–2026  
Unit: AI systems  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Epoch AI (2026) – with major processing by Our World in Data

#### Full citation
Epoch AI (2026) – with major processing by Our World in Data. “Annual number of AI systems by researcher affiliation” [dataset]. Epoch AI, “Parameter, Compute and Data Trends in Machine Learning” [original data].
Source: Epoch AI (2026) – with major processing by Our World In Data

### How is this data described by its producer - Epoch AI (2026)?
The distinction is documented in [Academia and Industry](https://docs.google.com/document/d/1wyJmDOWDEKItg0QhO5cpsNAgHq4aHOxQQZnTfzm34gI/edit).
Systems are categorized as “Industry” if their authors are affiliated with private sector organizations, “Academia” if the authors are affiliated with universities or academic institutions, or “Industry - Academia Collaboration” when at least 30% of the authors are from each.
Possible values: Industry, Research Collective, Academia, Industry - Academia Collaboration (Industry leaning), Industry - Academia Collaboration (Academia leaning), Non-profit

### Source

#### Epoch AI – Parameter, Compute and Data Trends in Machine Learning
Retrieved on: 2026-08-19  
Retrieved from: https://epoch.ai/mlinputs/visualization  


    