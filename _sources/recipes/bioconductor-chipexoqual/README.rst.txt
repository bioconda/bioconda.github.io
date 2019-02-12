:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipexoqual'
.. highlight: bash

bioconductor-chipexoqual
========================

.. conda:recipe:: bioconductor-chipexoqual
   :replaces_section_title:

   Package with a quality control pipeline for ChIP\-exo\/nexus data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ChIPexoQual.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-chipexoqual <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipexoqual>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipexoqual/meta.yaml>`_

   


.. conda:package:: bioconductor-chipexoqual

   |downloads_bioconductor-chipexoqual| |docker_bioconductor-chipexoqual|

   :versions: 1.6.0-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-biovizbase: >=1.30.0,<1.31.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-broom: >=0.4
   
   :depends r-data.table: >=1.9.6
   
   :depends r-dplyr: >=0.5
   
   :depends r-ggplot2: >=1.0
   
   :depends r-hexbin: >=1.27
   
   :depends r-rcolorbrewer: >=1.1
   
   :depends r-rmarkdown: 
   
   :depends r-scales: >=0.4.0
   
   :depends r-viridis: >=0.3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipexoqual

   and update with::

      conda update bioconductor-chipexoqual

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chipexoqual:<tag>

   (see `bioconductor-chipexoqual/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipexoqual| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipexoqual.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chipexoqual| image:: https://quay.io/repository/biocontainers/bioconductor-chipexoqual/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipexoqual
.. _`bioconductor-chipexoqual/tags`: https://quay.io/repository/biocontainers/bioconductor-chipexoqual?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipexoqual/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipexoqual/README.html