:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cydar'
.. highlight: bash

bioconductor-cydar
==================

.. conda:recipe:: bioconductor-cydar
   :replaces_section_title:
   :noindex:

   Using Mass Cytometry for Differential Abundance Analyses

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/cydar.html
   :license: GPL-3
   :recipe: /`bioconductor-cydar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cydar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cydar/meta.yaml>`_

   Identifies differentially abundant populations between samples and groups in mass cytometry data. Provides methods for counting cells into hyperspheres\, controlling the spatial false discovery rate\, and visualizing changes in abundance in the high\-dimensional marker space.


.. conda:package:: bioconductor-cydar

   |downloads_bioconductor-cydar| |docker_bioconductor-cydar|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocneighbors: ``>=1.8.0,<1.9.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rcpp: 
   :depends r-shiny: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cydar

   and update with::

      conda update bioconductor-cydar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cydar:<tag>

   (see `bioconductor-cydar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cydar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cydar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cydar
   :alt:   (downloads)
.. |docker_bioconductor-cydar| image:: https://quay.io/repository/biocontainers/bioconductor-cydar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cydar
.. _`bioconductor-cydar/tags`: https://quay.io/repository/biocontainers/bioconductor-cydar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cydar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cydar/README.html