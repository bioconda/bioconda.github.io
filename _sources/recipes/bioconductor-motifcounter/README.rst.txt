:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifcounter'
.. highlight: bash

bioconductor-motifcounter
=========================

.. conda:recipe:: bioconductor-motifcounter
   :replaces_section_title:

   R package for analysing TFBSs in DNA sequences

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/motifcounter.html
   :license: GPL-2
   :recipe: /`bioconductor-motifcounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifcounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifcounter/meta.yaml>`_

   \'motifcounter\' provides motif matching\, motif counting and motif enrichment functionality based on position frequency matrices. The main features of the packages include the utilization of higher\-order background models and accounting for self\-overlapping motif matches when determining motif enrichment. The background model allows to capture dinucleotide \(or higher\-order nucleotide\) composition adequately which may reduced model biases and misleading results compared to using simple GC background models. When conducting a motif enrichment analysis based on the motif match count\, the package relies on a compound Poisson distribution or alternatively a combinatorial model. These distribution account for self\-overlapping motif structures as exemplified by repeat\-like or palindromic motifs\, and allow to determine the p\-value and fold\-enrichment for a set of observed motif matches.


.. conda:package:: bioconductor-motifcounter

   |downloads_bioconductor-motifcounter| |docker_bioconductor-motifcounter|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-1, 1.6.0-0, 1.4.0-0, 1.2.1-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motifcounter

   and update with::

      conda update bioconductor-motifcounter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifcounter:<tag>

   (see `bioconductor-motifcounter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifcounter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifcounter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifcounter
   :alt:   (downloads)
.. |docker_bioconductor-motifcounter| image:: https://quay.io/repository/biocontainers/bioconductor-motifcounter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifcounter
.. _`bioconductor-motifcounter/tags`: https://quay.io/repository/biocontainers/bioconductor-motifcounter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifcounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifcounter/README.html