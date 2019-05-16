:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-agdex'
.. highlight: bash

bioconductor-agdex
==================

.. conda:recipe:: bioconductor-agdex
   :replaces_section_title:

   A tool to evaluate agreement of differential expression for cross\-species genomics

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/AGDEX.html
   :license: GPL Version 2 or later
   :recipe: /`bioconductor-agdex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agdex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agdex/meta.yaml>`_
   :links: biotools: :biotools:`agdex`, doi: :doi:`10.1093/bioinformatics/btr362`

   


.. conda:package:: bioconductor-agdex

   |downloads_bioconductor-agdex| |docker_bioconductor-agdex|

   :versions: 1.30.0-0, 1.28.0-0, 1.26.0-0, 1.24.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-gseabase: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-agdex

   and update with::

      conda update bioconductor-agdex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-agdex:<tag>

   (see `bioconductor-agdex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-agdex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-agdex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-agdex
   :alt:   (downloads)
.. |docker_bioconductor-agdex| image:: https://quay.io/repository/biocontainers/bioconductor-agdex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-agdex
.. _`bioconductor-agdex/tags`: https://quay.io/repository/biocontainers/bioconductor-agdex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-agdex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-agdex/README.html