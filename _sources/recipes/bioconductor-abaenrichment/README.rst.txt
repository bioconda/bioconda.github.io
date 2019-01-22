.. _`bioconductor-abaenrichment`:

bioconductor-abaenrichment
==========================

|downloads|

The package ABAEnrichment is designed to test for enrichment of user defined candidate genes in the set of expressed genes in different human brain regions. The core function \'aba\_enrich\' integrates the expression of the candidate gene set \(averaged across donors\) and the structural information of the brain using an ontology\, both provided by the Allen Brain Atlas project. \'aba\_enrich\' interfaces the ontology enrichment software FUNC to perform the statistical analyses. Additional functions provided in this package like \'get\_expression\' and \'plot\_expression\' facilitate exploring the expression data\, and besides the standard candidate vs. background gene set enrichment\, also three additional tests are implemented\, e.g. for cases when genes are ranked instead of divided into candidate and background.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ABAEnrichment.html
Versions      1.10.0, 1.8.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abaenrichment



Links         biotools: :biotools:`abaenrichment`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-abaenrichment

and update with::

   conda update bioconductor-abaenrichment



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-abaenrichment.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-abaenrichment/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-abaenrichment/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-abaenrichment/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-abaenrichment
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-abaenrichment/status
                :target: https://quay.io/repository/biocontainers/bioconductor-abaenrichment

