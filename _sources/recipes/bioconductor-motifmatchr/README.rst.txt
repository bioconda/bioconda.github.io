:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifmatchr'
.. highlight: bash

bioconductor-motifmatchr
========================

.. conda:recipe:: bioconductor-motifmatchr
   :replaces_section_title:

   Fast Motif Matching in R

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/motifmatchr.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-motifmatchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifmatchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifmatchr/meta.yaml>`_

   Quickly find motif matches for many motifs and many sequences. Wraps C\+\+ code from the MOODS motif calling library\, which was developed by Pasi Rastas\, Janne Korhonen\, and Petri Martinmäki.


.. conda:package:: bioconductor-motifmatchr

   |downloads_bioconductor-motifmatchr| |docker_bioconductor-motifmatchr|

   :versions: 1.8.0-0, 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends bioconductor-tfbstools: >=1.24.0,<1.25.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motifmatchr

   and update with::

      conda update bioconductor-motifmatchr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifmatchr:<tag>

   (see `bioconductor-motifmatchr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifmatchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifmatchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifmatchr
   :alt:   (downloads)
.. |docker_bioconductor-motifmatchr| image:: https://quay.io/repository/biocontainers/bioconductor-motifmatchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifmatchr
.. _`bioconductor-motifmatchr/tags`: https://quay.io/repository/biocontainers/bioconductor-motifmatchr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifmatchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifmatchr/README.html