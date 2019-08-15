:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meshr'
.. highlight: bash

bioconductor-meshr
==================

.. conda:recipe:: bioconductor-meshr
   :replaces_section_title:

   A set of annotation maps describing the entire MeSH assembled using data from MeSH.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/meshr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meshr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshr/meta.yaml>`_

   


.. conda:package:: bioconductor-meshr

   |downloads_bioconductor-meshr| |docker_bioconductor-meshr|

   :versions: 1.20.0-1, 1.18.0-1, 1.18.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-category: >=2.50.0,<2.51.0
   :depends bioconductor-cummerbund: >=2.26.0,<2.27.0
   :depends bioconductor-mesh.aca.eg.db: >=1.12.0,<1.13.0
   :depends bioconductor-mesh.aor.db: >=1.12.0,<1.13.0
   :depends bioconductor-mesh.bsu.168.eg.db: >=1.12.0,<1.13.0
   :depends bioconductor-mesh.db: >=1.12.0,<1.13.0
   :depends bioconductor-mesh.hsa.eg.db: >=1.12.0,<1.13.0
   :depends bioconductor-mesh.pcr.db: >=1.12.0,<1.13.0
   :depends bioconductor-mesh.syn.eg.db: >=1.12.0,<1.13.0
   :depends bioconductor-meshdbi: >=1.20.0,<1.21.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-fdrtool: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meshr

   and update with::

      conda update bioconductor-meshr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meshr:<tag>

   (see `bioconductor-meshr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meshr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meshr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meshr
   :alt:   (downloads)
.. |docker_bioconductor-meshr| image:: https://quay.io/repository/biocontainers/bioconductor-meshr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meshr
.. _`bioconductor-meshr/tags`: https://quay.io/repository/biocontainers/bioconductor-meshr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meshr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meshr/README.html