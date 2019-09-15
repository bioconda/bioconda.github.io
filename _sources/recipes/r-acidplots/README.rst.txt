:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidplots'
.. highlight: bash

r-acidplots
===========

.. conda:recipe:: r-acidplots
   :replaces_section_title:

   Functions for plotting genomic data.

   :homepage: https://acidplots.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/acidplots
   :license: MIT
   :recipe: /`r-acidplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots/meta.yaml>`_

   


.. conda:package:: r-acidplots

   |downloads_r-acidplots| |docker_r-acidplots|

   :versions: 0.2.15-0, 0.2.14-0
   
   :depends bioconductor-biocgenerics: >=0.30
   :depends bioconductor-deseq2: >=1.24
   :depends bioconductor-dropletutils: >=1.4
   :depends bioconductor-iranges: >=2.18.2
   :depends bioconductor-s4vectors: >=0.22
   :depends bioconductor-singlecellexperiment: >=1.6
   :depends bioconductor-summarizedexperiment: >=1.14
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-basejump: >=0.11.14
   :depends r-bioverbs: >=0.2.10
   :depends r-cowplot: >=1.0
   :depends r-ggplot2: >=3.2
   :depends r-ggrepel: >=0.8
   :depends r-ggridges: >=0.5
   :depends r-goalie: >=0.3.7
   :depends r-matrix: >=1.2
   :depends r-matrixstats: >=0.54
   :depends r-pheatmap: >=1.0
   :depends r-rcolorbrewer: >=1.1
   :depends r-rlang: >=0.4
   :depends r-tibble: >=2.1
   :depends r-upsetr: >=1.4
   :depends r-viridis: >=0.5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidplots

   and update with::

      conda update r-acidplots

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidplots:<tag>

   (see `r-acidplots/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidplots| image:: https://img.shields.io/conda/dn/bioconda/r-acidplots.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidplots
   :alt:   (downloads)
.. |docker_r-acidplots| image:: https://quay.io/repository/biocontainers/r-acidplots/status
   :target: https://quay.io/repository/biocontainers/r-acidplots
.. _`r-acidplots/tags`: https://quay.io/repository/biocontainers/r-acidplots?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidplots/README.html