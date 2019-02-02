.. _`bioconductor-ihw`:

bioconductor-ihw
================

|downloads|

Independent hypothesis weighting \(IHW\) is a multiple testing procedure that increases power compared to the method of Benjamini and Hochberg by assigning data\-driven weights to each hypothesis. The input to IHW is a two\-column table of p\-values and covariates. The covariate can be any continuous\-valued or categorical variable that is thought to be informative on the statistical properties of each hypothesis test\, while it is independent of the p\-value under the null hypothesis.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/IHW.html
Versions      1.10.0, 1.8.0, 1.6.0, 1.4.0, 1.2.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-ihw/meta.yaml



Links         biotools: :biotools:`IHW`, doi: :doi:`10.1038/nmeth.3885`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ihw

and update with::

   conda update bioconductor-ihw



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ihw.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ihw/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ihw/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ihw/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ihw
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ihw/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ihw

