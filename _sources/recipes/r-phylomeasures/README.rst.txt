.. _`r-phylomeasures`:

r-phylomeasures
===============

|downloads|

Given a phylogenetic tree T and an assemblage S of species represented as  a subset of tips in T\, we want to compute a measure of the diversity  of the species in S with respect to T. The current package offers  efficient algorithms that can process large phylogenetic data for several such measures.  Most importantly\, the package includes algorithms for computing  efficiently the standardized versions of phylogenetic measures and their p\-values\, which are  essential for null model comparisons. Among other functions\,  the package provides efficient computation of richness\-standardized versions  for indices such as the net relatedness index \(NRI\)\,  nearest taxon index \(NTI\)\, phylogenetic diversity index \(PDI\)\, and the corresponding indices of two\-sample measures.  The package also introduces a new single\-sample measure\, the Core Ancestor Cost \(CAC\)\; the package provides functions for computing the value and the standardised index of the CAC and\, more than that\, there is an extra function available that can compute exactly  any statistical moment of the measure. The package supports computations under different null models\, including abundance\-weighted models.

============= ===========
Home          https://CRAN.R-project.org/package=PhyloMeasures
Versions      2.1
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/r-phylomeasures/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-phylomeasures

and update with::

   conda update r-phylomeasures



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-phylomeasures.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-phylomeasures/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-phylomeasures/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-phylomeasures/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-phylomeasures
.. |docker| image:: https://quay.io/repository/biocontainers/r-phylomeasures/status
                :target: https://quay.io/repository/biocontainers/r-phylomeasures

