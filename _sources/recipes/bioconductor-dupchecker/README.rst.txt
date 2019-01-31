.. _`bioconductor-dupchecker`:

bioconductor-dupchecker
=======================

|downloads|

Meta\-analysis has become a popular approach for high\-throughput genomic data analysis because it often can significantly increase power to detect biological signals or patterns in datasets. However\, when using public\-available databases for meta\-analysis\, duplication of samples is an often encountered problem\, especially for gene expression data. Not removing duplicates would make study results questionable. We developed a Bioconductor package DupChecker that efficiently identifies duplicated samples by generating MD5 fingerprints for raw data.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DupChecker.html
Versions      1.18.0, 1.16.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-dupchecker/meta.yaml



Links         biotools: :biotools:`dupchecker`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dupchecker

and update with::

   conda update bioconductor-dupchecker



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dupchecker.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dupchecker/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dupchecker/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dupchecker/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dupchecker
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dupchecker/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dupchecker

