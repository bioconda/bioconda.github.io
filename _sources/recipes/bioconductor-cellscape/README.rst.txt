:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellscape'
.. highlight: bash

bioconductor-cellscape
======================

.. conda:recipe:: bioconductor-cellscape
   :replaces_section_title:

   CellScape facilitates interactive browsing of single cell clonal evolution datasets. The tool requires two main inputs\: \(i\) the genomic content of each single cell in the form of either copy number segments or targeted mutation values\, and \(ii\) a single cell phylogeny. Phylogenetic formats can vary from dendrogram\-like phylogenies with leaf nodes to evolutionary model\-derived phylogenies with observed or latent internal nodes. The CellScape phylogeny is flexibly input as a table of source\-target edges to support arbitrary representations\, where each node may or may not have associated genomic data. The output of CellScape is an interactive interface displaying a single cell phylogeny and a cell\-by\-locus genomic heatmap representing the mutation status in each cell for each locus.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/cellscape.html
   :license: GPL-3
   :recipe: /`bioconductor-cellscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellscape/meta.yaml>`_

   


.. conda:package:: bioconductor-cellscape

   |downloads_bioconductor-cellscape| |docker_bioconductor-cellscape|

   :versions: 1.8.0-1, 1.8.0-0, 1.6.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dplyr: >=0.4.3
   :depends r-gtools: >=3.5.0
   :depends r-htmlwidgets: >=0.5
   :depends r-jsonlite: >=0.9.19
   :depends r-plyr: >=1.8.3
   :depends r-reshape2: >=1.4.1
   :depends r-stringr: >=1.0.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellscape

   and update with::

      conda update bioconductor-cellscape

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellscape:<tag>

   (see `bioconductor-cellscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellscape
   :alt:   (downloads)
.. |docker_bioconductor-cellscape| image:: https://quay.io/repository/biocontainers/bioconductor-cellscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellscape
.. _`bioconductor-cellscape/tags`: https://quay.io/repository/biocontainers/bioconductor-cellscape?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellscape/README.html