:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ihwpaper'
.. highlight: bash

bioconductor-ihwpaper
=====================

.. conda:recipe:: bioconductor-ihwpaper
   :replaces_section_title:

   This package conveniently wraps all functions needed to reproduce the figures in the IHW paper \(https\:\/\/www.nature.com\/articles\/nmeth.3885\) and the latest arXiv preprint available under http\:\/\/arxiv.org\/abs\/1701.05179. Thus it is a companion package to the Bioconductor IHW package.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/IHWpaper.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ihwpaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ihwpaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ihwpaper/meta.yaml>`_

   


.. conda:package:: bioconductor-ihwpaper

   |downloads_bioconductor-ihwpaper| |docker_bioconductor-ihwpaper|

   :versions: 1.13.0-0, 1.12.0-1, 1.10.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-deseq2: >=1.26.0,<1.27.0
   :depends bioconductor-genefilter: >=1.68.0,<1.69.0
   :depends bioconductor-ihw: >=1.14.0,<1.15.0
   :depends bioconductor-qvalue: >=2.18.0,<2.19.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends curl: >=7.65.3,<8.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-fdrtool: 
   :depends r-ggplot2: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ihwpaper

   and update with::

      conda update bioconductor-ihwpaper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ihwpaper:<tag>

   (see `bioconductor-ihwpaper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ihwpaper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ihwpaper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ihwpaper
   :alt:   (downloads)
.. |docker_bioconductor-ihwpaper| image:: https://quay.io/repository/biocontainers/bioconductor-ihwpaper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ihwpaper
.. _`bioconductor-ihwpaper/tags`: https://quay.io/repository/biocontainers/bioconductor-ihwpaper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ihwpaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ihwpaper/README.html