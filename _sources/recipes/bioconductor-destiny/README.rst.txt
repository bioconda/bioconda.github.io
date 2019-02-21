:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-destiny'
.. highlight: bash

bioconductor-destiny
====================

.. conda:recipe:: bioconductor-destiny
   :replaces_section_title:

   Create and plot diffusion maps.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/destiny.html
   :license: GPL
   :recipe: /`bioconductor-destiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-destiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-destiny/meta.yaml>`_

   


.. conda:package:: bioconductor-destiny

   |downloads_bioconductor-destiny| |docker_bioconductor-destiny|

   :versions: 2.12.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-ggthemes: 
   
   :depends r-igraph: 
   
   :depends r-matrix: 
   
   :depends r-proxy: 
   
   :depends r-rcpp: >=0.10.3
   
   :depends r-rcppeigen: 
   
   :depends r-scales: 
   
   :depends r-scatterplot3d: 
   
   :depends r-smoother: 
   
   :depends r-vim: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-destiny

   and update with::

      conda update bioconductor-destiny

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-destiny:<tag>

   (see `bioconductor-destiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-destiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-destiny.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-destiny| image:: https://quay.io/repository/biocontainers/bioconductor-destiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-destiny
.. _`bioconductor-destiny/tags`: https://quay.io/repository/biocontainers/bioconductor-destiny?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-destiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-destiny/README.html