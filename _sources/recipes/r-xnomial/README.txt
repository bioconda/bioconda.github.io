.. _`r-xnomial`:

r-xnomial
=========

|downloads|

Tests whether a set of counts fit a given expected ratio. For example, a genetic cross might be expected to produce four types in the relative frequencies of 9:3:3:1. To see whether a set of observed counts fits this expectation, one can examine all possible outcomes with xmulti() or a random sample of them with xmonte() and find the probability of an observation deviating from the expectation by at least as much as the observed. As a measure of deviation from the expected, one can use the log-likelihood ratio, the multinomial probability, or the classic chi-square statistic. A histogram of the test statistic can also be plotted and compared with the asymptotic curve.

======== ===========
Home     https://cran.r-project.org/web/packages/XNomial/index.html
Versions 1.0.4
License  GPL-2|GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xnomial
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-xnomial

and update with::

   conda update r-xnomial



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-xnomial.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-xnomial/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-xnomial/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-xnomial/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-xnomial
.. |docker| image:: https://quay.io/repository/biocontainers/r-xnomial/status
                :target: https://quay.io/repository/biocontainers/r-xnomial


