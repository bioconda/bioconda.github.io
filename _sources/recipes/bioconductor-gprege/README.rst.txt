.. _`bioconductor-gprege`:

bioconductor-gprege
===================

|downloads|

The gprege package implements the methodology described in Kalaitzis \& Lawrence \(2011\) \"A simple approach to ranking differentially expressed gene expression time\-courses through Gaussian process regression\". The software fits two GPs with the an RBF \(\+ noise diagonal\) kernel on each profile. One GP kernel is initialised wih a short lengthscale hyperparameter\, signal variance as the observed variance and a zero noise variance. It is optimised via scaled conjugate gradients \(netlab\). A second GP has fixed hyperparameters\: zero inverse\-width\, zero signal variance and noise variance as the observed variance. The log\-ratio of marginal likelihoods of the two hypotheses acts as a score of differential expression for the profile. Comparison via ROC curves is performed against BATS \(Angelini et.al\, 2007\). A detailed discussion of the ranking approach and dataset used can be found in the paper \(http\:\/\/www.biomedcentral.com\/1471\-2105\/12\/180\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/gprege.html
Versions      
License       AGPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gprege



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gprege

and update with::

   conda update bioconductor-gprege



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gprege.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gprege/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gprege/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gprege/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gprege
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gprege/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gprege

