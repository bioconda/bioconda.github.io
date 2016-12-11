.. _`r-dunn.test`:

r-dunn.test
===========

|downloads|

Computes Dunn's test (1964) for stochastic dominance and reports the results among multiple pairwise comparisons after a Kruskal-Wallis test for stochastic dominance among k groups (Kruskal and Wallis, 1952). The interpretation of stochastic dominance requires an assumption that the CDF of one group does not cross the CDF of the other. 'dunn.test' makes k(k-1)/2 multiple pairwise comparisons based on Dunn's z-test-statistic approximations to the actual rank statistics. The null hypothesis for each pairwise comparison is that the probability of observing a randomly selected value from the first group that is larger than a randomly selected value from the second group equals one half; this null hypothesis corresponds to that of the Wilcoxon-Mann-Whitney rank-sum test. Like the rank-sum test, if the data can be assumed to be continuous, and the distributions are assumed identical except for a difference in location, Dunn's test may be understood as a test for median difference. 'dunn.test' accounts for tied ranks.

======== ===========
Home     
Versions 1.3.1
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dunn.test
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-dunn.test

and update with::

   conda update r-dunn.test



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-dunn.test.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-dunn.test/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-dunn.test/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-dunn.test/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-dunn.test
.. |docker| image:: https://quay.io/repository/biocontainers/r-dunn.test/status
                :target: https://quay.io/repository/biocontainers/r-dunn.test


