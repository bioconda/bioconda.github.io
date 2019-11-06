:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcpheno'
.. highlight: bash

bioconductor-pcpheno
====================

.. conda:recipe:: bioconductor-pcpheno
   :replaces_section_title:

   Tools to integrate\, annotate\, and link phenotypes to cellular organizational units such as protein complexes and pathways.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/PCpheno.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pcpheno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcpheno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcpheno/meta.yaml>`_
   :links: biotools: :biotools:`pcpheno`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-pcpheno

   |downloads_bioconductor-pcpheno| |docker_bioconductor-pcpheno|

   :versions: 1.48.0-0, 1.46.0-1, 1.44.0-0, 1.42.0-0, 1.40.0-0
   
   :depends bioconductor-annotate: >=1.64.0,<1.65.0
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-category: >=2.52.0,<2.53.0
   :depends bioconductor-go.db: >=3.10.0,<3.11.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-gseabase: >=1.48.0,<1.49.0
   :depends bioconductor-kegg.db: >=3.2.0,<3.3.0
   :depends bioconductor-ppidata: >=0.23.0,<0.24.0
   :depends bioconductor-ppistats: >=1.52.0,<1.53.0
   :depends bioconductor-scisi: >=1.58.0,<1.59.0
   :depends bioconductor-slgi: >=1.46.0,<1.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pcpheno

   and update with::

      conda update bioconductor-pcpheno

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcpheno:<tag>

   (see `bioconductor-pcpheno/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcpheno| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcpheno.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcpheno
   :alt:   (downloads)
.. |docker_bioconductor-pcpheno| image:: https://quay.io/repository/biocontainers/bioconductor-pcpheno/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcpheno
.. _`bioconductor-pcpheno/tags`: https://quay.io/repository/biocontainers/bioconductor-pcpheno?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcpheno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcpheno/README.html