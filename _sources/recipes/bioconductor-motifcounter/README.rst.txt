.. _`bioconductor-motifcounter`:

bioconductor-motifcounter
=========================

|downloads|

'motifcounter' provides functionality to compute the statistics related with motif matching and counting of motif matches in DNA sequences. As an input, 'motifcounter' requires a motif in terms of a position frequency matrix (PFM). Furthermore, a set of DNA sequences is required to estimated a higher-order background model (BGM). The package provides functions to investigate the the per-position and per strand log-likelihood scores between the PFM and the BGM across a given sequence of set of sequences. Furthermore, the package facilitates motif matching based on an automatically derived score threshold. To this end the distribution of scores is efficiently determined and the score threshold is chosen for a user-prescribed significance level. This allows to control for the false positive rate. Moreover, 'motifcounter' implements a motif match enrichment test based on two the number of motif matches that are expected in random DNA sequences. Motif enrichment is facilitated by either a compound Poisson approximation or a combinatorial approximation of the motif match counts. Both models take higher-order background models, the motif's self-similarity, and hits on both DNA strands into account. The package is in particular useful for long motifs and/or relaxed choices of score thresholds, because the implemented algorithms efficiently bypass the need for enumerating a (potentially huge) set of DNA words that can give rise to a motif match.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/motifcounter.html
Versions 1.2.1
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifcounter
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-motifcounter

and update with::

   conda update bioconductor-motifcounter



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-motifcounter.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-motifcounter/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-motifcounter/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-motifcounter/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-motifcounter
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-motifcounter/status
                :target: https://quay.io/repository/biocontainers/bioconductor-motifcounter


