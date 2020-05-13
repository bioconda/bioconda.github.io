:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocor'
.. highlight: bash

bioconductor-biocor
===================

.. conda:recipe:: bioconductor-biocor
   :replaces_section_title:

   Functional similarities

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/BioCor.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocor/meta.yaml>`_

   Calculates functional similarities based on the pathways described on KEGG and REACTOME or in gene sets. These similarities can be calculated for pathways or gene sets\, genes\, or clusters and combined with other similarities. They can be used to improve networks\, gene selection\, testing relationships...


.. conda:package:: bioconductor-biocor

   |downloads_bioconductor-biocor| |docker_bioconductor-biocor|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.1-0, 1.6.0-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-gseabase: >=1.50.0,<1.51.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocor

   and update with::

      conda update bioconductor-biocor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocor:<tag>

   (see `bioconductor-biocor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocor
   :alt:   (downloads)
.. |docker_bioconductor-biocor| image:: https://quay.io/repository/biocontainers/bioconductor-biocor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocor
.. _`bioconductor-biocor/tags`: https://quay.io/repository/biocontainers/bioconductor-biocor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocor/README.html