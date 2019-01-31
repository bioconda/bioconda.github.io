.. _`bioconductor-pvca`:

bioconductor-pvca
=================

|downloads|

This package contains the function to assess the batch sourcs by fitting all \"sources\" as random effects including two\-way interaction terms in the Mixed Model\(depends on lme4 package\) to selected principal components\, which were obtained from the original data correlation matrix. This package accompanies the book \"Batch Effects and Noise in Microarray Experiements\, chapter 12.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/pvca.html
Versions      1.20.0, 1.18.0
License       LGPL (>= 2.0)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-pvca/meta.yaml



Links         biotools: :biotools:`pvca`, doi: :doi:`10.1002/9780470685983.ch12`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-pvca

and update with::

   conda update bioconductor-pvca



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-pvca.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-pvca/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-pvca/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-pvca/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-pvca
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-pvca/status
                :target: https://quay.io/repository/biocontainers/bioconductor-pvca

