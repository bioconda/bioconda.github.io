:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-egad'
.. highlight: bash

bioconductor-egad
=================

.. conda:recipe:: bioconductor-egad
   :replaces_section_title:

   The package implements a series of highly efficient tools to calculate functional properties of networks based on guilt by association methods.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/EGAD.html
   :license: GPL-2
   :recipe: /`bioconductor-egad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egad/meta.yaml>`_

   


.. conda:package:: bioconductor-egad

   |downloads_bioconductor-egad| |docker_bioconductor-egad|

   :versions: 1.12.0-1, 1.10.0-0
   
   :depends bioconductor-affy: >=1.62.0,<1.63.0
   :depends bioconductor-arrayqualitymetrics: >=3.40.0,<3.41.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-geoquery: >=2.52.0,<2.53.0
   :depends bioconductor-impute: >=1.58.0,<1.59.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-egad

   and update with::

      conda update bioconductor-egad

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-egad:<tag>

   (see `bioconductor-egad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-egad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-egad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-egad
   :alt:   (downloads)
.. |docker_bioconductor-egad| image:: https://quay.io/repository/biocontainers/bioconductor-egad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-egad
.. _`bioconductor-egad/tags`: https://quay.io/repository/biocontainers/bioconductor-egad?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-egad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-egad/README.html