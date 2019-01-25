.. _`bioconductor-simlr`:

bioconductor-simlr
==================

|downloads|

Single\-cell RNA\-seq technologies enable high throughput gene expression measurement of individual cells\, and allow the discovery of heterogeneity within cell populations. Measurement of cell\-to\-cell gene expression similarity is critical for the identification\, visualization and analysis of cell populations. However\, single\-cell data introduce challenges to conventional measures of gene expression similarity because of the high level of noise\, outliers and dropouts. We develop a novel similarity\-learning framework\, SIMLR \(Single\-cell Interpretation via Multi\-kernel LeaRning\)\, which learns an appropriate distance metric from the data for dimension reduction\, clustering and visualization.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SIMLR.html
Versions      1.6.0, 1.4.0
License       file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-simlr/meta.yaml



Links         biotools: :biotools:`simlr`, doi: :doi:`10.1101/118901`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-simlr

and update with::

   conda update bioconductor-simlr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-simlr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-simlr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-simlr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-simlr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-simlr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-simlr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-simlr

