:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metavolcanor'
.. highlight: bash

bioconductor-metavolcanor
=========================

.. conda:recipe:: bioconductor-metavolcanor
   :replaces_section_title:

   Gene expression meta\-analysis visualization tool

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/MetaVolcanoR.html
   :license: GPL-3
   :recipe: /`bioconductor-metavolcanor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavolcanor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavolcanor/meta.yaml>`_

   This package combines differential gene expression results. It implements three strategies to summarize gene expression activities from different studies. i\) a naive vote\-counting approach\, ii\) a combining\-approach and iii\) Random Effects Model \(REM\) approach. In all cases\, MetaVolcano exploits the Volcano plot reasoning to visualize the gene expression meta\-analysis results.


.. conda:package:: bioconductor-metavolcanor

   |downloads_bioconductor-metavolcanor| |docker_bioconductor-metavolcanor|

   :versions: 1.2.0-0, 0.99.14-0
   
   :depends bioconductor-topconfects: >=1.4.0,<1.5.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-metafor: 
   :depends r-metap: 
   :depends r-plotly: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metavolcanor

   and update with::

      conda update bioconductor-metavolcanor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metavolcanor:<tag>

   (see `bioconductor-metavolcanor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metavolcanor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metavolcanor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metavolcanor
   :alt:   (downloads)
.. |docker_bioconductor-metavolcanor| image:: https://quay.io/repository/biocontainers/bioconductor-metavolcanor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metavolcanor
.. _`bioconductor-metavolcanor/tags`: https://quay.io/repository/biocontainers/bioconductor-metavolcanor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metavolcanor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metavolcanor/README.html