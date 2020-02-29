:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-liger'
.. highlight: bash

r-liger
=======

.. conda:recipe:: r-liger
   :replaces_section_title:

   R package for integrating and analyzing multiple single\-cell datasets

   :homepage: https://github.com/MacoskoLab/liger
   :license: GPL3 / GPL-3
   :recipe: /`r-liger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-liger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-liger/meta.yaml>`_

   


.. conda:package:: r-liger

   |downloads_r-liger| |docker_r-liger|

   :versions: 0.4.2.9000-1, 0.4.2.9000-0
   
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openjdk: >=6
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cowplot: 
   :depends r-dosnow: 
   :depends r-dplyr: 
   :depends r-fnn: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-hmisc: 
   :depends r-ica: 
   :depends r-irlba: 
   :depends r-mclust: 
   :depends r-patchwork: 
   :depends r-plyr: 
   :depends r-rann.l1: 
   :depends r-rcpp: >=0.12.10
   :depends r-rcpparmadillo: 
   :depends r-reticulate: 
   :depends r-riverplot: 
   :depends r-rtsne: 
   :depends r-snow: 
   :depends umap-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-liger

   and update with::

      conda update r-liger

   or use the docker container::

      docker pull quay.io/biocontainers/r-liger:<tag>

   (see `r-liger/tags`_ for valid values for ``<tag>``)


.. |downloads_r-liger| image:: https://img.shields.io/conda/dn/bioconda/r-liger.svg?style=flat
   :target: https://anaconda.org/bioconda/r-liger
   :alt:   (downloads)
.. |docker_r-liger| image:: https://quay.io/repository/biocontainers/r-liger/status
   :target: https://quay.io/repository/biocontainers/r-liger
.. _`r-liger/tags`: https://quay.io/repository/biocontainers/r-liger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-liger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-liger/README.html