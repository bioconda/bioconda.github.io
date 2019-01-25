.. _`bioconductor-cnvpanelizer`:

bioconductor-cnvpanelizer
=========================

|downloads|

A method that allows for the use of a collection of non\-matched normal tissue samples. Our approach uses a non\-parametric bootstrap subsampling of the available reference samples to estimate the distribution of read counts from targeted sequencing. As inspired by random forest\, this is combined with a procedure that subsamples the amplicons associated with each of the targeted genes. The obtained information allows us to reliably classify the copy number aberrations on the gene level.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/CNVPanelizer.html
Versions      1.12.0, 1.8.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-cnvpanelizer/meta.yaml



Links         biotools: :biotools:`cnvpanelizer`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cnvpanelizer

and update with::

   conda update bioconductor-cnvpanelizer



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cnvpanelizer/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cnvpanelizer/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cnvpanelizer/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cnvpanelizer
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer

