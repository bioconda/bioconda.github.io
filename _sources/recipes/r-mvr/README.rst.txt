.. _`r-mvr`:

r-mvr
=====

|downloads|

This is a non\-parametric method for joint adaptive mean\-variance regularization and variance stabilization of high\-dimensional data. It is suited for handling difficult problems posed by high\-dimensional multivariate datasets \(p \>\> n paradigm\). Among those are that the variance is often a function of the mean\, variable\-specific estimators of variances are not reliable\, and tests statistics have low powers due to a lack of degrees of freedom. Key features include\: \(i\) Normalization and\/or variance stabilization of the data\, \(ii\) Computation of mean\-variance\-regularized t\-statistics \(F\-statistics to follow\)\, \(iii\) Generation of diverse diagnostic plots\, \(iv\) Computationally efficient implementation using C\/C\+\+ interfacing and an option for parallel computing to enjoy a faster and easier experience in the R environment.

============= ===========
Home          https://github.com/jedazard/MVR
Versions      1.33.0
License       GPL (>= 3) | file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-mvr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-mvr

and update with::

   conda update r-mvr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-mvr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-mvr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-mvr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-mvr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-mvr
.. |docker| image:: https://quay.io/repository/biocontainers/r-mvr/status
                :target: https://quay.io/repository/biocontainers/r-mvr

