.. _`bioconductor-bacon`:

bioconductor-bacon
==================

|downloads|

Bacon can be used to remove inflation and bias often observed in epigenome\- and transcriptome\-wide association studies. To this end bacon constructs an empirical null distribution using a Gibbs Sampling algorithm by fitting a three\-component normal mixture on z\-scores.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/bacon.html
Versions      1.8.0, 1.6.0, 1.4.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bacon



Links         biotools: :biotools:`bacon`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bacon

and update with::

   conda update bioconductor-bacon



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bacon.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bacon/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bacon/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bacon/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bacon
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bacon/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bacon

