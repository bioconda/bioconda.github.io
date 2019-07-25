:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-odseq'
.. highlight: bash

bioconductor-odseq
==================

.. conda:recipe:: bioconductor-odseq
   :replaces_section_title:

   Performs outlier detection of sequences in a multiple sequence alignment using bootstrap of predefined distance metrics. Outlier sequences can make downstream analyses unreliable or make the alignments less accurate while they are being constructed. This package implements the OD\-seq algorithm proposed by Jehl et al \(doi 10.1186\/s12859\-015\-0702\-1\) for aligned sequences and a variant using string kernels for unaligned sequences.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/odseq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-odseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-odseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-odseq/meta.yaml>`_

   


.. conda:package:: bioconductor-odseq

   |downloads_bioconductor-odseq| |docker_bioconductor-odseq|

   :versions: 1.12.0-1, 1.10.0-0
   
   :depends bioconductor-kebabs: >=1.18.0,<1.19.0
   :depends bioconductor-msa: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-mclust: >=5.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-odseq

   and update with::

      conda update bioconductor-odseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-odseq:<tag>

   (see `bioconductor-odseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-odseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-odseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-odseq
   :alt:   (downloads)
.. |docker_bioconductor-odseq| image:: https://quay.io/repository/biocontainers/bioconductor-odseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-odseq
.. _`bioconductor-odseq/tags`: https://quay.io/repository/biocontainers/bioconductor-odseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-odseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-odseq/README.html