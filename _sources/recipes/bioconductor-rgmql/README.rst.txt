:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgmql'
.. highlight: bash

bioconductor-rgmql
==================

.. conda:recipe:: bioconductor-rgmql
   :replaces_section_title:

   This package brings the GenoMetric Query Language \(GMQL\) functionalities into the R environment. GMQL is a high\-level\, declarative language to manage heterogeneous genomic datasets for biomedical purposes\, using simple queries to process genomic regions and their metadata and properties. GMQL adopts algorithms efficiently designed for big data using cloud\-computing technologies \(like Apache Hadoop and Spark\) allowing GMQL to run on modern infrastructures\, in order to achieve scalability and high performance. It allows to create\, manipulate and extract genomic data from different data sources both locally and remotely. Our RGMQL functions allow complex queries and processing leveraging on the R idiomatic paradigm. The RGMQL package also provides a rich set of ancillary classes that allow sophisticated input\/output management and sorting\, such as\: ASC\, DESC\, BAG\, MIN\, MAX\, SUM\, AVG\, MEDIAN\, STD\, Q1\, Q2\, Q3 \(and many others\). Note that many RGMQL functions are not directly executed in R environment\, but are deferred until real execution is issued.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RGMQL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgmql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgmql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgmql/meta.yaml>`_

   


.. conda:package:: bioconductor-rgmql

   |downloads_bioconductor-rgmql| |docker_bioconductor-rgmql|

   :versions: 1.2.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-rgmqllib: >=1.2.0,<1.3.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-glue: 
   :depends r-httr: 
   :depends r-plyr: 
   :depends r-rjava: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgmql

   and update with::

      conda update bioconductor-rgmql

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgmql:<tag>

   (see `bioconductor-rgmql/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgmql| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgmql.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgmql
   :alt:   (downloads)
.. |docker_bioconductor-rgmql| image:: https://quay.io/repository/biocontainers/bioconductor-rgmql/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgmql
.. _`bioconductor-rgmql/tags`: https://quay.io/repository/biocontainers/bioconductor-rgmql?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgmql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgmql/README.html