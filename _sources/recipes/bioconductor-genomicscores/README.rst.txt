:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicscores'
.. highlight: bash

bioconductor-genomicscores
==========================

.. conda:recipe:: bioconductor-genomicscores
   :replaces_section_title:

   Provide infrastructure to store and access genomewide position\-specific scores within R and Bioconductor.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GenomicScores.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicscores <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicscores>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicscores/meta.yaml>`_

   


.. conda:package:: bioconductor-genomicscores

   |downloads_bioconductor-genomicscores| |docker_bioconductor-genomicscores|

   :versions: 1.6.0-0, 1.4.1-0, 1.2.0-0, 1.0.2-0
   
   :depends bioconductor-annotationhub: >=2.14.0,<2.15.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicscores

   and update with::

      conda update bioconductor-genomicscores

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicscores:<tag>

   (see `bioconductor-genomicscores/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicscores| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicscores.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicscores
   :alt:   (downloads)
.. |docker_bioconductor-genomicscores| image:: https://quay.io/repository/biocontainers/bioconductor-genomicscores/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicscores
.. _`bioconductor-genomicscores/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicscores?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicscores/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicscores/README.html