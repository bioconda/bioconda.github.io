.. _`bioconductor-decomplexdisease`:

bioconductor-decomplexdisease
=============================

|downloads|

It is designed to find the differential expressed genes \(DEGs\) for complex disease\, which is characterized by the heterogeneous genomic expression profiles. Different from the established DEG analysis tools\, it does not assume the patients of complex diseases to share the common DEGs. By applying a bi\-clustering algorithm\, DECD finds the DEGs shared by as many patients. In this way\, DECD describes the DEGs of complex disease in a novel syntax\, e.g. a gene list composed of 200 genes are differentially expressed in 30\% percent of studied complex disease. Applying the DECD analysis results\, users are possible to find the patients affected by the same mechanism based on the shared signatures.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DEComplexDisease.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decomplexdisease



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-decomplexdisease

and update with::

   conda update bioconductor-decomplexdisease



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-decomplexdisease.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-decomplexdisease/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-decomplexdisease/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-decomplexdisease/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-decomplexdisease
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-decomplexdisease/status
                :target: https://quay.io/repository/biocontainers/bioconductor-decomplexdisease

