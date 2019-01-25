.. _`bioconductor-missrows`:

bioconductor-missrows
=====================

|downloads|

The missRows package implements the MI\-MFA method to deal with missing individuals \(\'biological units\'\) in multi\-omics data integration. The MI\-MFA method generates multiple imputed datasets from a Multiple Factor Analysis model\, then the yield results are combined in a single consensus solution. The package provides functions for estimating coordinates of individuals and variables\, imputing missing individuals\, and various diagnostic plots to inspect the pattern of missingness and visualize the uncertainty due to missing values.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/missRows.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-missrows/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-missrows

and update with::

   conda update bioconductor-missrows



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-missrows.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-missrows/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-missrows/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-missrows/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-missrows
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-missrows/status
                :target: https://quay.io/repository/biocontainers/bioconductor-missrows

