:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maftools'
.. highlight: bash

bioconductor-maftools
=====================

.. conda:recipe:: bioconductor-maftools
   :replaces_section_title:

   Analyze and visualize Mutation Annotation Format \(MAF\) files from large scale sequencing studies. This package provides various functions to perform most commonly used analyses in cancer genomics and to create feature rich customizable visualzations with minimal effort.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/maftools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-maftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maftools/meta.yaml>`_

   


.. conda:package:: bioconductor-maftools

   |downloads_bioconductor-maftools| |docker_bioconductor-maftools|

   :versions: 1.8.0-0, 1.6.15-0, 1.4.27-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-complexheatmap: >=1.20.0,<1.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cometexacttest: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-ggplot2: >=2.0
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-mclust: 
   :depends r-nmf: 
   :depends r-rcolorbrewer: 
   :depends r-rjson: 
   :depends r-survival: 
   :depends r-wordcloud: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maftools

   and update with::

      conda update bioconductor-maftools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maftools:<tag>

   (see `bioconductor-maftools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maftools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maftools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-maftools| image:: https://quay.io/repository/biocontainers/bioconductor-maftools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maftools
.. _`bioconductor-maftools/tags`: https://quay.io/repository/biocontainers/bioconductor-maftools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maftools/README.html