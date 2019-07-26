:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-heatmaps'
.. highlight: bash

bioconductor-heatmaps
=====================

.. conda:recipe:: bioconductor-heatmaps
   :replaces_section_title:

   This package provides functions for plotting heatmaps of genome\-wide data across genomic intervals\, such as ChIP\-seq signals at peaks or across promoters. Many functions are also provided for investigating sequence features.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/heatmaps.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-heatmaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heatmaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heatmaps/meta.yaml>`_

   


.. conda:package:: bioconductor-heatmaps

   |downloads_bioconductor-heatmaps| |docker_bioconductor-heatmaps|

   :versions: 1.8.0-1, 1.6.0-0, 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-ebimage: >=4.26.0,<4.27.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-kernsmooth: 
   :depends r-matrix: 
   :depends r-plotrix: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-heatmaps

   and update with::

      conda update bioconductor-heatmaps

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-heatmaps:<tag>

   (see `bioconductor-heatmaps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-heatmaps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-heatmaps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-heatmaps
   :alt:   (downloads)
.. |docker_bioconductor-heatmaps| image:: https://quay.io/repository/biocontainers/bioconductor-heatmaps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-heatmaps
.. _`bioconductor-heatmaps/tags`: https://quay.io/repository/biocontainers/bioconductor-heatmaps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-heatmaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-heatmaps/README.html