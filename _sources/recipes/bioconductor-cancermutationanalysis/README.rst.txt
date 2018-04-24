.. _`bioconductor-cancermutationanalysis`:

bioconductor-cancermutationanalysis
===================================

|downloads|

This package implements gene and gene\-set level analysis methods for somatic mutation studies of cancer.  The gene\-level methods distinguish between driver genes \(which play an active role in tumorigenesis\) and passenger genes \(which are mutated in tumor samples\, but have no role in tumorigenesis\) and incorporate a two\-stage study design.  The gene\-set methods implement a patient\-oriented approach\, which calculates gene\-set scores for each sample\, then combines them across samples\; a gene\-oriented approach which uses the Wilcoxon test is also provided for comparison.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/CancerMutationAnalysis.html
Versions      1.18.0, 1.20.0
License       GPL (>= 2) + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancermutationanalysis



Links         biotools: :biotools:`cancermutationanalysis`, doi: :doi:`10.1007/978-1-62703-721-1_7`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cancermutationanalysis

and update with::

   conda update bioconductor-cancermutationanalysis



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cancermutationanalysis.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cancermutationanalysis/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cancermutationanalysis/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cancermutationanalysis/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cancermutationanalysis
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cancermutationanalysis/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cancermutationanalysis

