.. _`bioconductor-crossmeta`:

bioconductor-crossmeta
======================

|downloads|

Implements cross\-platform and cross\-species meta\-analyses of Affymentrix\, Illumina\, and Agilent microarray data. This package automates common tasks such as downloading\, normalizing\, and annotating raw GEO data. The user then selects control and treatment samples in order to perform differential expression\/pathway analyses for all comparisons. After analysing each contrast seperately\, the user can select tissue sources for each contrast and specify any tissue sources that should be grouped for the subsequent meta\-analyses. Finally\, effect size and pathway meta\-analyses can proceed and the results graphically explored.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/crossmeta.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-crossmeta/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-crossmeta

and update with::

   conda update bioconductor-crossmeta



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-crossmeta.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-crossmeta/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-crossmeta/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-crossmeta/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-crossmeta
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-crossmeta/status
                :target: https://quay.io/repository/biocontainers/bioconductor-crossmeta

