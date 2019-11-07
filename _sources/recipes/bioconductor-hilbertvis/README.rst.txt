:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hilbertvis'
.. highlight: bash

bioconductor-hilbertvis
=======================

.. conda:recipe:: bioconductor-hilbertvis
   :replaces_section_title:

   Hilbert curve visualization

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/HilbertVis.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-hilbertvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertvis/meta.yaml>`_
   :links: biotools: :biotools:`hilbertvis`, doi: :doi:`10.1093/bioinformatics/btp152`

   Functions to visualize long vectors of integer data by means of Hilbert curves


.. conda:package:: bioconductor-hilbertvis

   |downloads_bioconductor-hilbertvis| |docker_bioconductor-hilbertvis|

   :versions: 1.44.0-0, 1.42.0-1, 1.42.0-0, 1.40.0-1, 1.40.0-0, 1.38.0-0, 1.36.0-0, 1.34.0-0, 1.32.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hilbertvis

   and update with::

      conda update bioconductor-hilbertvis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hilbertvis:<tag>

   (see `bioconductor-hilbertvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hilbertvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hilbertvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hilbertvis
   :alt:   (downloads)
.. |docker_bioconductor-hilbertvis| image:: https://quay.io/repository/biocontainers/bioconductor-hilbertvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hilbertvis
.. _`bioconductor-hilbertvis/tags`: https://quay.io/repository/biocontainers/bioconductor-hilbertvis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hilbertvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hilbertvis/README.html