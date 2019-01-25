.. _`bioconductor-normr`:

bioconductor-normr
==================

|downloads|

Robust normalization and difference calling procedures for ChIP\-seq and alike data. Read counts are modeled jointly as a binomial mixture model with a user\-specified number of components. A fitted background estimate accounts for the effect of enrichment in certain regions and\, therefore\, represents an appropriate null hypothesis. This robust background is used to identify significantly enriched or depleted regions.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/normr.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-normr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-normr

and update with::

   conda update bioconductor-normr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-normr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-normr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-normr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-normr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-normr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-normr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-normr

