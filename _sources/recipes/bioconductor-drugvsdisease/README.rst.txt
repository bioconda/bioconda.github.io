.. _`bioconductor-drugvsdisease`:

bioconductor-drugvsdisease
==========================

|downloads|

This package generates ranked lists of differential gene expression for either disease or drug profiles. Input data can be downloaded from Array Express or GEO\, or from local CEL files. Ranked lists of differential expression and associated p\-values are calculated using Limma. Enrichment scores \(Subramanian et al. PNAS 2005\) are calculated to a reference set of default drug or disease profiles\, or a set of custom data supplied by the user. Network visualisation of significant scores are output in Cytoscape format.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DrugVsDisease.html
Versions      2.24.2, 2.22.0, 2.20.1
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-drugvsdisease/meta.yaml



Links         biotools: :biotools:`drugvsdisease`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-drugvsdisease

and update with::

   conda update bioconductor-drugvsdisease



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-drugvsdisease.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-drugvsdisease/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-drugvsdisease/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-drugvsdisease/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-drugvsdisease
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-drugvsdisease/status
                :target: https://quay.io/repository/biocontainers/bioconductor-drugvsdisease

