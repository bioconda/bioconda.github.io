:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netbiov'
.. highlight: bash

bioconductor-netbiov
====================

.. conda:recipe:: bioconductor-netbiov
   :replaces_section_title:

   A package for visualizing complex biological network

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/netbiov.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-netbiov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netbiov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netbiov/meta.yaml>`_
   :links: biotools: :biotools:`netbiov`, doi: :doi:`10.1093/bioinformatics/btu384`

   A package that provides an effective visualization of large biological networks


.. conda:package:: bioconductor-netbiov

   |downloads_bioconductor-netbiov| |docker_bioconductor-netbiov|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-1, 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-igraph: >=0.7.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netbiov

   and update with::

      conda update bioconductor-netbiov

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netbiov:<tag>

   (see `bioconductor-netbiov/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netbiov| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netbiov.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netbiov
   :alt:   (downloads)
.. |docker_bioconductor-netbiov| image:: https://quay.io/repository/biocontainers/bioconductor-netbiov/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netbiov
.. _`bioconductor-netbiov/tags`: https://quay.io/repository/biocontainers/bioconductor-netbiov?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netbiov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netbiov/README.html