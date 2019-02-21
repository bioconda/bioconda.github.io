:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pickgene'
.. highlight: bash

bioconductor-pickgene
=====================

.. conda:recipe:: bioconductor-pickgene
   :replaces_section_title:

   Functions to Analyze Microarray \(Gene Expression\) Data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pickgene.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pickgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pickgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pickgene/meta.yaml>`_
   :links: biotools: :biotools:`pickgene`, doi: :doi:`10.1007/0-387-21679-0_13`

   


.. conda:package:: bioconductor-pickgene

   |downloads_bioconductor-pickgene| |docker_bioconductor-pickgene|

   :versions: 1.54.0-0, 1.52.0-0, 1.50.0-0, 1.48.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-mass: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pickgene

   and update with::

      conda update bioconductor-pickgene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pickgene:<tag>

   (see `bioconductor-pickgene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pickgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pickgene.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pickgene| image:: https://quay.io/repository/biocontainers/bioconductor-pickgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pickgene
.. _`bioconductor-pickgene/tags`: https://quay.io/repository/biocontainers/bioconductor-pickgene?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pickgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pickgene/README.html