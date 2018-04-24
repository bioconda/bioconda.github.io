.. _`bioconductor-hybridmtest`:

bioconductor-hybridmtest
========================

|downloads|

Performs hybrid multiple testing that incorporates method selection and assumption evaluations into the analysis using empirical Bayes probability \(EBP\) estimates obtained by Grenander density estimation. For instance\, for 3\-group comparison analysis\, Hybrid Multiple testing considers EBPs as weighted EBPs between F\-test and H\-test with EBPs from Shapiro Wilk test of normality as weigth. Instead of just using EBPs from F\-test only or using H\-test only\, this methodology combines both types of EBPs through EBPs from Shapiro Wilk test of normality. This methodology uses then the law of total EBPs.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/HybridMTest.html
Versions      1.22.0
License       GPL Version 2 or later
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hybridmtest



Links         biotools: :biotools:`hybridmtest`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hybridmtest

and update with::

   conda update bioconductor-hybridmtest



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hybridmtest.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hybridmtest/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hybridmtest/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hybridmtest/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hybridmtest
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hybridmtest/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hybridmtest

