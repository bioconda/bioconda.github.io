:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicozone'
.. highlight: bash

bioconductor-genomicozone
=========================

.. conda:recipe:: bioconductor-genomicozone
   :replaces_section_title:
   :noindex:

   Delineate outstanding genomic zones of differential gene activity

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GenomicOZone.html
   :license: LGPL (>=3)
   :recipe: /`bioconductor-genomicozone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicozone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicozone/meta.yaml>`_

   The package clusters gene activity along chromosome into zones\, detects differential zones as outstanding\, and visualizes maps of outstanding zones across the genome. The method guarantees cluster optimality\, linear runtime to sample size\, and reproducibility. It enables new characterization of effects due to genome reorganization\, structural variation\, and epigenome alteration.


.. conda:package:: bioconductor-genomicozone

   |downloads_bioconductor-genomicozone| |docker_bioconductor-genomicozone|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-ggbio: ``>=1.38.0,<1.39.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ckmeans.1d.dp: ``>=4.3.0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-plyr: 
   :depends r-rdpack: 
   :depends r-sjstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicozone

   and update with::

      conda update bioconductor-genomicozone

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicozone:<tag>

   (see `bioconductor-genomicozone/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicozone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicozone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicozone
   :alt:   (downloads)
.. |docker_bioconductor-genomicozone| image:: https://quay.io/repository/biocontainers/bioconductor-genomicozone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicozone
.. _`bioconductor-genomicozone/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicozone?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicozone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicozone/README.html