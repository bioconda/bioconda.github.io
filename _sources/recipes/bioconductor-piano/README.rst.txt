:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-piano'
.. highlight: bash

bioconductor-piano
==================

.. conda:recipe:: bioconductor-piano
   :replaces_section_title:

   Piano performs gene set analysis using various statistical methods\, from different gene level statistics and a wide range of gene\-set collections. Furthermore\, the Piano package contains functions for combining the results of multiple runs of gene set analyses.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/piano.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-piano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-piano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-piano/meta.yaml>`_
   :links: biotools: :biotools:`piano`

   


.. conda:package:: bioconductor-piano

   |downloads_bioconductor-piano| |docker_bioconductor-piano|

   :versions: 1.22.0-0, 1.20.1-0, 1.18.0-0, 1.16.4-0, 1.12.1-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-fgsea: >=1.8.0,<1.9.0
   :depends bioconductor-marray: >=1.60.0,<1.61.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-relations: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-piano

   and update with::

      conda update bioconductor-piano

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-piano:<tag>

   (see `bioconductor-piano/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-piano| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-piano.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-piano
   :alt:   (downloads)
.. |docker_bioconductor-piano| image:: https://quay.io/repository/biocontainers/bioconductor-piano/status
   :target: https://quay.io/repository/biocontainers/bioconductor-piano
.. _`bioconductor-piano/tags`: https://quay.io/repository/biocontainers/bioconductor-piano?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-piano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-piano/README.html