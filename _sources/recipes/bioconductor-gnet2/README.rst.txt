:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gnet2'
.. highlight: bash

bioconductor-gnet2
==================

.. conda:recipe:: bioconductor-gnet2
   :replaces_section_title:

   Cluster genes to functional groups with E\-M process. Iteratively perform TF assigning and Gene assigning\, until the assignment of genes did not change\, or max number of iterations is reached.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GNET2.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-gnet2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnet2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnet2/meta.yaml>`_

   


.. conda:package:: bioconductor-gnet2

   |downloads_bioconductor-gnet2| |docker_bioconductor-gnet2|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-diagrammer: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-xgboost: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gnet2

   and update with::

      conda update bioconductor-gnet2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gnet2:<tag>

   (see `bioconductor-gnet2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gnet2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gnet2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gnet2
   :alt:   (downloads)
.. |docker_bioconductor-gnet2| image:: https://quay.io/repository/biocontainers/bioconductor-gnet2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gnet2
.. _`bioconductor-gnet2/tags`: https://quay.io/repository/biocontainers/bioconductor-gnet2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gnet2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gnet2/README.html