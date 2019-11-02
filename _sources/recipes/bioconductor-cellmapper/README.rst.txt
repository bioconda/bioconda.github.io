:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellmapper'
.. highlight: bash

bioconductor-cellmapper
=======================

.. conda:recipe:: bioconductor-cellmapper
   :replaces_section_title:

   Infers cell type\-specific expression based on co\-expression similarity with known cell type marker genes. Can make accurate predictions using publicly available expression data\, even when a cell type has not been isolated before.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CellMapper.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapper/meta.yaml>`_
   :links: biotools: :biotools:`cellmapper`

   


.. conda:package:: bioconductor-cellmapper

   |downloads_bioconductor-cellmapper| |docker_bioconductor-cellmapper|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellmapper

   and update with::

      conda update bioconductor-cellmapper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellmapper:<tag>

   (see `bioconductor-cellmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellmapper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellmapper
   :alt:   (downloads)
.. |docker_bioconductor-cellmapper| image:: https://quay.io/repository/biocontainers/bioconductor-cellmapper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmapper
.. _`bioconductor-cellmapper/tags`: https://quay.io/repository/biocontainers/bioconductor-cellmapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmapper/README.html