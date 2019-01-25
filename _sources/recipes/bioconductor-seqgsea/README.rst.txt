.. _`bioconductor-seqgsea`:

bioconductor-seqgsea
====================

|downloads|

The package generally provides methods for gene set enrichment analysis of high\-throughput RNA\-Seq data by integrating differential expression and splicing. It uses negative binomial distribution to model read count data\, which accounts for sequencing biases and biological variation. Based on permutation tests\, statistical significance can also be achieved regarding each gene\'s differential expression and splicing\, respectively.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SeqGSEA.html
Versions      1.20.0, 1.18.0, 1.16.0
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-seqgsea/meta.yaml



Links         biotools: :biotools:`seqgsea`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-seqgsea

and update with::

   conda update bioconductor-seqgsea



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-seqgsea.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-seqgsea/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-seqgsea/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-seqgsea/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-seqgsea
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-seqgsea/status
                :target: https://quay.io/repository/biocontainers/bioconductor-seqgsea

