.. _`bioconductor-rfpred`:

bioconductor-rfpred
===================

|downloads|

Based on external numerous data files where rfPred scores are pre\-calculated on all genomic positions of the human exome\, the package gives rfPred scores to missense variants identified by the chromosome\, the position \(hg19 version\)\, the referent and alternative nucleotids and the uniprot identifier of the protein. Note that for using the package\, the user has to be connected on the Internet or to download the TabixFile and index \(approximately 3.3 Go\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/rfPred.html
Versions      1.18.0, 1.16.0, 1.14.0
License       GPL (>=2 )
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfpred



Links         biotools: :biotools:`rfpred`, doi: :doi:`10.1101/037127`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rfpred

and update with::

   conda update bioconductor-rfpred



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rfpred.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rfpred/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rfpred/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rfpred/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rfpred
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rfpred/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rfpred

