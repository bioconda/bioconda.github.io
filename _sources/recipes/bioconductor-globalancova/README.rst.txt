.. _`bioconductor-globalancova`:

bioconductor-globalancova
=========================

|downloads|

We give the following arguments in support of the GlobalAncova approach\: After appropriate normalisation\, gene\-expression\-data appear rather symmetrical and outliers are no real problem\, so least squares should be rather robust. ANCOVA with interaction yields saturated data modelling e.g. different means per group and gene. Covariate adjustment can help to correct for possible selection bias. Variance homogeneity and uncorrelated residuals cannot be expected. Application of ordinary least squares gives unbiased\, but no longer optimal estimates \(Gauss\-Markov\-Aitken\). Therefore\, using the classical F\-test is inappropriate\, due to correlation. The test statistic however mirrors deviations from the null hypothesis. In combination with a permutation approach\, empirical significance levels can be approximated. Alternatively\, an approximation yields asymptotic p\-values. This work was supported by the NGFN grant 01 GR 0459\, BMBF\, Germany.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/GlobalAncova.html
Versions      3.46.0, 3.48.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalancova



Links         biotools: :biotools:`globalancova`, doi: :doi:`10.1093/bioinformatics/btm531`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-globalancova

and update with::

   conda update bioconductor-globalancova



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-globalancova.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-globalancova/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-globalancova/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-globalancova/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-globalancova
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-globalancova/status
                :target: https://quay.io/repository/biocontainers/bioconductor-globalancova

