:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netresponse'
.. highlight: bash

bioconductor-netresponse
========================

.. conda:recipe:: bioconductor-netresponse
   :replaces_section_title:

   Functional Network Analysis

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/netresponse.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-netresponse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netresponse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netresponse/meta.yaml>`_

   Algorithms for functional network analysis. Includes an implementation of a variational Dirichlet process Gaussian mixture model for nonparametric mixture modeling.


.. conda:package:: bioconductor-netresponse

   |downloads_bioconductor-netresponse| |docker_bioconductor-netresponse|

   :versions: 1.48.0-0, 1.46.0-0, 1.44.0-1, 1.42.0-0
   
   :depends bioconductor-graph: >=1.66.0,<1.67.0
   :depends bioconductor-minet: >=3.46.0,<3.47.0
   :depends bioconductor-qvalue: >=2.20.0,<2.21.0
   :depends bioconductor-rgraphviz: >=2.32.0,<2.33.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dmt: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-mclust: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netresponse

   and update with::

      conda update bioconductor-netresponse

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netresponse:<tag>

   (see `bioconductor-netresponse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netresponse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netresponse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netresponse
   :alt:   (downloads)
.. |docker_bioconductor-netresponse| image:: https://quay.io/repository/biocontainers/bioconductor-netresponse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netresponse
.. _`bioconductor-netresponse/tags`: https://quay.io/repository/biocontainers/bioconductor-netresponse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netresponse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netresponse/README.html