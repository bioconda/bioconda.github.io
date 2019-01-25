.. _`bioconductor-rgmql`:

bioconductor-rgmql
==================

|downloads|

This package brings the GenoMetric Query Language \(GMQL\) functionalities into the R environment. GMQL is a high\-level\, declarative language to manage heterogeneous genomic datasets for biomedical purposes\, using simple queries to process genomic regions and their metadata and properties. GMQL adopts algorithms efficiently designed for big data using cloud\-computing technologies \(like Apache Hadoop and Spark\) allowing GMQL to run on modern infrastructures\, in order to achieve scalability and high performance. It allows to create\, manipulate and extract genomic data from different data sources both locally and remotely. Our RGMQL functions allow complex queries and processing leveraging on the R idiomatic paradigm. The RGMQL package also provides a rich set of ancillary classes that allow sophisticated input\/output management and sorting\, such as\: ASC\, DESC\, BAG\, MIN\, MAX\, SUM\, AVG\, MEDIAN\, STD\, Q1\, Q2\, Q3 \(and many others\). Note that many RGMQL functions are not directly executed in R environment\, but are deferred until real execution is issued.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/RGMQL.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-rgmql/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rgmql

and update with::

   conda update bioconductor-rgmql



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rgmql.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rgmql/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rgmql/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rgmql/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rgmql
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rgmql/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rgmql

