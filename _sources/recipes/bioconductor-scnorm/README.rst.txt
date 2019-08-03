:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scnorm'
.. highlight: bash

bioconductor-scnorm
===================

.. conda:recipe:: bioconductor-scnorm
   :replaces_section_title:

   This package implements SCnorm — a method to normalize single\-cell RNA\-seq data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SCnorm.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-scnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scnorm/meta.yaml>`_

   


.. conda:package:: bioconductor-scnorm

   |downloads_bioconductor-scnorm| |docker_bioconductor-scnorm|

   :versions: 1.6.0-1, 1.4.3-0, 1.2.1-0, 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-singlecellexperiment: >=1.6.0,<1.7.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-moments: 
   :depends r-quantreg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scnorm

   and update with::

      conda update bioconductor-scnorm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scnorm:<tag>

   (see `bioconductor-scnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scnorm
   :alt:   (downloads)
.. |docker_bioconductor-scnorm| image:: https://quay.io/repository/biocontainers/bioconductor-scnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scnorm
.. _`bioconductor-scnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-scnorm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scnorm/README.html