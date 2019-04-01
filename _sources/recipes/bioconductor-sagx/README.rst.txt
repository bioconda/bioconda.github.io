:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sagx'
.. highlight: bash

bioconductor-sagx
=================

.. conda:recipe:: bioconductor-sagx
   :replaces_section_title:

   A package for retrieval\, preparation and analysis of data from the Affymetrix GeneChip. In particular the issue of identifying differentially expressed genes is addressed.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SAGx.html
   :license: GPL-3
   :recipe: /`bioconductor-sagx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagx/meta.yaml>`_
   :links: biotools: :biotools:`sagx`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-sagx

   |downloads_bioconductor-sagx| |docker_bioconductor-sagx|

   :versions: 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-multtest: >=2.38.0,<2.39.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sagx

   and update with::

      conda update bioconductor-sagx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sagx:<tag>

   (see `bioconductor-sagx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sagx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sagx.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sagx| image:: https://quay.io/repository/biocontainers/bioconductor-sagx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sagx
.. _`bioconductor-sagx/tags`: https://quay.io/repository/biocontainers/bioconductor-sagx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sagx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sagx/README.html