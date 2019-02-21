:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scone'
.. highlight: bash

bioconductor-scone
==================

.. conda:recipe:: bioconductor-scone
   :replaces_section_title:

   SCONE is an R package for comparing and ranking the performance of different normalization schemes for single\-cell RNA\-seq and other high\-throughput analyses.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scone.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scone/meta.yaml>`_

   


.. conda:package:: bioconductor-scone

   |downloads_bioconductor-scone| |docker_bioconductor-scone|

   :versions: 1.6.0-0
   
   :depends bioconductor-aroma.light: >=3.12.0,<3.13.0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-rhdf5: >=2.26.0,<2.27.0
   
   :depends bioconductor-ruvseq: >=1.16.0,<1.17.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-boot: 
   
   :depends r-class: 
   
   :depends r-cluster: 
   
   :depends r-compositions: 
   
   :depends r-diptest: 
   
   :depends r-fpc: 
   
   :depends r-gplots: 
   
   :depends r-hexbin: 
   
   :depends r-matrixstats: 
   
   :depends r-mixtools: 
   
   :depends r-rarpack: 
   
   :depends r-rcolorbrewer: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scone

   and update with::

      conda update bioconductor-scone

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scone:<tag>

   (see `bioconductor-scone/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scone.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scone| image:: https://quay.io/repository/biocontainers/bioconductor-scone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scone
.. _`bioconductor-scone/tags`: https://quay.io/repository/biocontainers/bioconductor-scone?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scone/README.html