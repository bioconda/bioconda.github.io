:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mageckflute'
.. highlight: bash

bioconductor-mageckflute
========================

.. conda:recipe:: bioconductor-mageckflute
   :replaces_section_title:

   Integrative analysis pipeline for pooled CRISPR functional genetic screens

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/MAGeCKFlute.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-mageckflute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mageckflute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mageckflute/meta.yaml>`_

   MAGeCKFlute is designed to surporting downstream analysis\, utilizing the gene summary data provided through MAGeCK or MAGeCK\-VISPR. Quality control\, normalization\, and screen hit identification for CRISPR screen data are performed in pipeline. Identified hits within the pipeline are categorized based on experimental design\, and are subsequently interpreted by functional enrichment analysis.


.. conda:package:: bioconductor-mageckflute

   |downloads_bioconductor-mageckflute| |docker_bioconductor-mageckflute|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.2-0, 1.2.3-0, 1.2.2-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-clusterprofiler: >=3.16.0,<3.17.0
   :depends bioconductor-dose: >=3.14.0,<3.15.0
   :depends bioconductor-enrichplot: >=1.8.0,<1.9.0
   :depends bioconductor-graph: >=1.66.0,<1.67.0
   :depends bioconductor-kegggraph: >=1.48.0,<1.49.0
   :depends bioconductor-keggrest: >=1.28.0,<1.29.0
   :depends bioconductor-pathview: >=1.28.0,<1.29.0
   :depends bioconductor-sva: >=3.36.0,<3.37.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :depends r-dendextend: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-ggsci: 
   :depends r-gridextra: 
   :depends r-msigdbr: 
   :depends r-pheatmap: 
   :depends r-png: 
   :depends r-scales: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mageckflute

   and update with::

      conda update bioconductor-mageckflute

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mageckflute:<tag>

   (see `bioconductor-mageckflute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mageckflute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mageckflute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mageckflute
   :alt:   (downloads)
.. |docker_bioconductor-mageckflute| image:: https://quay.io/repository/biocontainers/bioconductor-mageckflute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mageckflute
.. _`bioconductor-mageckflute/tags`: https://quay.io/repository/biocontainers/bioconductor-mageckflute?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mageckflute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mageckflute/README.html