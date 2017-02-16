.. _`r-fdrtool`:

r-fdrtool
=========

|downloads|

Estimates both tail area-based false discovery rates (Fdr) as well as local false discovery rates (fdr) for a variety of null models (p-values, z-scores, correlation coefficients, t-scores).  The proportion of null values and the parameters of the null distribution are adaptively estimated from the data.  In addition, the package contains functions for non-parametric density estimation (Grenander estimator), for monotone regression (isotonic regression and antitonic regression with weights), for computing the greatest convex minorant (GCM) and the least concave majorant (LCM), for the half-normal and correlation distributions, and for computing empirical higher criticism (HC) scores and the corresponding decision threshold.

======== ===========
Home     http://strimmerlab.org/software/fdrtool/
Versions 1.2.15
License  GPL (>= 3)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fdrtool
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-fdrtool

and update with::

   conda update r-fdrtool



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-fdrtool.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-fdrtool/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-fdrtool/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-fdrtool/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-fdrtool
.. |docker| image:: https://quay.io/repository/biocontainers/r-fdrtool/status
                :target: https://quay.io/repository/biocontainers/r-fdrtool


