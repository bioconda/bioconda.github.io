:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spicyr'
.. highlight: bash

bioconductor-spicyr
===================

.. conda:recipe:: bioconductor-spicyr
   :replaces_section_title:

   Spatial analysis of in situ cytometry data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/spicyR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-spicyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spicyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spicyr/meta.yaml>`_

   spicyR provides a series of functions to aid in the analysis of both immunofluorescence and mass cytometry imaging data as well as other assays that can deeply phenotype individual cells and their spatial location.


.. conda:package:: bioconductor-spicyr

   |downloads_bioconductor-spicyr| |docker_bioconductor-spicyr|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-class: 
   :depends r-concaveman: 
   :depends r-ggplot2: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :depends r-mgcv: 
   :depends r-pheatmap: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-spatstat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spicyr

   and update with::

      conda update bioconductor-spicyr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spicyr:<tag>

   (see `bioconductor-spicyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spicyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spicyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spicyr
   :alt:   (downloads)
.. |docker_bioconductor-spicyr| image:: https://quay.io/repository/biocontainers/bioconductor-spicyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spicyr
.. _`bioconductor-spicyr/tags`: https://quay.io/repository/biocontainers/bioconductor-spicyr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spicyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spicyr/README.html