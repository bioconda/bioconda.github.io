.. title:: Package Recipe 'bioconductor-heatmaps'
.. highlight: bash


bioconductor-heatmaps
=====================

.. conda:recipe:: bioconductor-heatmaps
   :replaces_section_title:

   This package provides functions for plotting heatmaps of genome\-wide data across genomic intervals\, such as ChIP\-seq signals at peaks or across promoters. Many functions are also provided for investigating sequence features.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/heatmaps.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-heatmaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heatmaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heatmaps/meta.yaml>`_

   


.. conda:package:: bioconductor-heatmaps

   |downloads_bioconductor-heatmaps| |docker_bioconductor-heatmaps|

   :versions: 1.6.0, 1.4.0, 1.2.0, 1.0.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-ebimage` >=4.24.0,<4.25.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-kernsmooth`  :conda:package:`r-matrix`  :conda:package:`r-plotrix`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-heatmaps|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-heatmaps

   and update with::

      conda update bioconductor-heatmaps

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-heatmaps


.. |required_by_bioconductor-heatmaps| conda:required_by:: bioconductor-heatmaps
.. |downloads_bioconductor-heatmaps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-heatmaps.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-heatmaps| image:: https://quay.io/repository/biocontainers/bioconductor-heatmaps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-heatmaps







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-heatmaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-heatmaps/README.html

