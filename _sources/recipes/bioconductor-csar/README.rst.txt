.. _`bioconductor-csar`:

bioconductor-csar
=================

|downloads|

Statistical tools for ChIP\-seq data analysis. The package includes the statistical method described in Kaufmann et al. \(2009\) PLoS Biology\: 7\(4\)\:e1000090. Briefly\, Taking the average DNA fragment size subjected to sequencing into account\, the software calculates genomic single\-nucleotide read\-enrichment values. After normalization\, sample and control are compared using a test based on the Poisson distribution. Test statistic thresholds to control the false discovery rate are obtained through random permutation.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/CSAR.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-csar/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-csar

and update with::

   conda update bioconductor-csar



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-csar.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-csar/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-csar/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-csar/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-csar
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-csar/status
                :target: https://quay.io/repository/biocontainers/bioconductor-csar

