:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-swath2stats'
.. highlight: bash

bioconductor-swath2stats
========================

.. conda:recipe:: bioconductor-swath2stats
   :replaces_section_title:

   This package is intended to transform SWATH data from the OpenSWATH software into a format readable by other statistics packages while performing filtering\, annotation and FDR estimation.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SWATH2stats.html
   :license: GPL-3
   :recipe: /`bioconductor-swath2stats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swath2stats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swath2stats/meta.yaml>`_
   :links: biotools: :biotools:`swath2stats`

   


.. conda:package:: bioconductor-swath2stats

   |downloads_bioconductor-swath2stats| |docker_bioconductor-swath2stats|

   :versions: 1.16.0-0, 1.14.0-1, 1.12.1-0, 1.10.2-0, 1.8.1-0, 1.6.1-0
   
   :depends bioconductor-biomart: >=2.42.0,<2.43.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-swath2stats

   and update with::

      conda update bioconductor-swath2stats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-swath2stats:<tag>

   (see `bioconductor-swath2stats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-swath2stats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swath2stats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-swath2stats
   :alt:   (downloads)
.. |docker_bioconductor-swath2stats| image:: https://quay.io/repository/biocontainers/bioconductor-swath2stats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swath2stats
.. _`bioconductor-swath2stats/tags`: https://quay.io/repository/biocontainers/bioconductor-swath2stats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swath2stats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swath2stats/README.html