.. _`bioconductor-stan`:

bioconductor-stan
=================

|downloads|

Genome segmentation with hidden Markov models has become a useful tool to annotate genomic elements\, such as promoters and enhancers. STAN \(genomic STate ANnotation\) implements \(bidirectional\) hidden Markov models \(HMMs\) using a variety of different probability distributions\, which can model a wide range of current genomic data \(e.g. continuous\, discrete\, binary\). STAN de novo learns and annotates the genome into a given number of \'genomic states\'. The \'genomic states\' may for instance reflect distinct genome\-associated protein complexes \(e.g. \'transcription states\'\) or describe recurring patterns of chromatin features \(referred to as \'chromatin states\'\). Unlike other tools\, STAN also allows for the integration of strand\-specific \(e.g. RNA\) and non\-strand\-specific data \(e.g. ChIP\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/STAN.html
Versions      2.8.0, 2.6.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-stan/meta.yaml



Links         biotools: :biotools:`stan`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-stan

and update with::

   conda update bioconductor-stan



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-stan.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-stan/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-stan/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-stan/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-stan
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-stan/status
                :target: https://quay.io/repository/biocontainers/bioconductor-stan

