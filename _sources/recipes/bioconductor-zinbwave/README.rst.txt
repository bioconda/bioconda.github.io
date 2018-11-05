.. _`bioconductor-zinbwave`:

bioconductor-zinbwave
=====================

|downloads|

Implements a general and flexible zero\-inflated negative binomial model that can be used to provide a low\-dimensional representations of single\-cell RNA\-seq data. The model accounts for zero inflation \(dropouts\)\, over\-dispersion\, and the count nature of the data. The model also accounts for the difference in library sizes and optionally for batch effects and\/or other covariates\, avoiding the need for pre\-normalize the data.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/zinbwave.html
Versions      1.0.0, 1.2.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zinbwave



Links         biotools: :biotools:`zinbwave`, doi: :doi:`10.1038/s41467-017-02554-5`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-zinbwave

and update with::

   conda update bioconductor-zinbwave



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-zinbwave.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-zinbwave/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-zinbwave/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-zinbwave/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-zinbwave
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-zinbwave/status
                :target: https://quay.io/repository/biocontainers/bioconductor-zinbwave

