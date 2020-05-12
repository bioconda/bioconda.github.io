:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lipidr'
.. highlight: bash

bioconductor-lipidr
===================

.. conda:recipe:: bioconductor-lipidr
   :replaces_section_title:

   Data Mining and Analysis of Lipidomics Datasets

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/lipidr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lipidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lipidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lipidr/meta.yaml>`_

   lipidr an easy\-to\-use R package implementing a complete workflow for downstream analysis of targeted and untargeted lipidomics data. lipidomics results can be imported into lipidr as a numerical matrix or a Skyline export\, allowing integration into current analysis frameworks. Data mining of lipidomics datasets is enabled through integration with Metabolomics Workbench API. lipidr allows data inspection\, normalization\, univariate and multivariate analysis\, displaying informative visualizations. lipidr also implements a novel Lipid Set Enrichment Analysis \(LSEA\)\, harnessing molecular information such as lipid class\, chain length and unsaturation.


.. conda:package:: bioconductor-lipidr

   |downloads_bioconductor-lipidr| |docker_bioconductor-lipidr|

   :versions: 2.2.0-0, 2.0.0-0, 1.0.0-1
   
   :depends bioconductor-fgsea: >=1.14.0,<1.15.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-ropls: >=1.20.0,<1.21.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lipidr

   and update with::

      conda update bioconductor-lipidr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lipidr:<tag>

   (see `bioconductor-lipidr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lipidr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lipidr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lipidr
   :alt:   (downloads)
.. |docker_bioconductor-lipidr| image:: https://quay.io/repository/biocontainers/bioconductor-lipidr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lipidr
.. _`bioconductor-lipidr/tags`: https://quay.io/repository/biocontainers/bioconductor-lipidr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lipidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lipidr/README.html