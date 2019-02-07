.. title:: Package Recipe 'bioconductor-pandar'
.. highlight: bash


bioconductor-pandar
===================

.. conda:recipe:: bioconductor-pandar
   :replaces_section_title:

   Runs PANDA\, an algorithm for discovering novel network structure by combining information from multiple complementary data sources.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pandaR.html
   :license: GPL-2
   :recipe: /`bioconductor-pandar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pandar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pandar/meta.yaml>`_
   :links: biotools: :biotools:`pandar`

   


.. conda:package:: bioconductor-pandar

   |downloads_bioconductor-pandar| |docker_bioconductor-pandar|

   :versions: 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-hexbin`  :conda:package:`r-igraph`  :conda:package:`r-matrixstats`  :conda:package:`r-plyr`  :conda:package:`r-reshape`  :conda:package:`r-runit`  

   :required~by: |required_by_bioconductor-pandar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pandar

   and update with::

      conda update bioconductor-pandar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pandar


.. |required_by_bioconductor-pandar| conda:required_by:: bioconductor-pandar
.. |downloads_bioconductor-pandar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pandar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pandar| image:: https://quay.io/repository/biocontainers/bioconductor-pandar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pandar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pandar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pandar/README.html

