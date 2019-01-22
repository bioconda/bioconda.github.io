.. _`bioconductor-motifcounter`:

bioconductor-motifcounter
=========================

|downloads|

\'motifcounter\' provides motif matching\, motif counting and motif enrichment functionality based on position frequency matrices. The main features of the packages include the utilization of higher\-order background models and accounting for self\-overlapping motif matches when determining motif enrichment. The background model allows to capture dinucleotide \(or higher\-order nucleotide\) composition adequately which may reduced model biases and misleading results compared to using simple GC background models. When conducting a motif enrichment analysis based on the motif match count\, the package relies on a compound Poisson distribution or alternatively a combinatorial model. These distribution account for self\-overlapping motif structures as exemplified by repeat\-like or palindromic motifs\, and allow to determine the p\-value and fold\-enrichment for a set of observed motif matches.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/motifcounter.html
Versions      1.4.0, 1.2.1
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifcounter



============= ===========



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

