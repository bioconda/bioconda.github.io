.. _`r-jackstraw`:

r-jackstraw
===========

|downloads|

Test for association between the observed data and their systematic patterns of variations. Systematic patterns may be captured by latent variables using principal component analysis \(PCA\)\, factor analysis \(FA\)\, and related methods. The jackstraw enables statistical testing for association between observed variables and latent variables\, as captured by PCs or other estimates. Similarly\, unsupervised clustering\, such as K\-means clustering\, partition around medoids \(PAM\)\, and others\, finds subpopulations among the observed variables. The jackstraw estimates statistical significance of cluster membership\, including unsupervised evaluation of cell identities in single cell RNA\-seq. P\-values and posterior probabilities allows one to rigorously evaluate the strength of cluster membership assignments.

============= ===========
Home          https://CRAN.R-project.org/package=jackstraw
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-jackstraw/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-jackstraw

and update with::

   conda update r-jackstraw



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-jackstraw.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-jackstraw/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-jackstraw/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-jackstraw/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-jackstraw
.. |docker| image:: https://quay.io/repository/biocontainers/r-jackstraw/status
                :target: https://quay.io/repository/biocontainers/r-jackstraw

