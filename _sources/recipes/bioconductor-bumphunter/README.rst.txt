:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bumphunter'
.. highlight: bash

bioconductor-bumphunter
=======================

.. conda:recipe:: bioconductor-bumphunter
   :replaces_section_title:

   Bump Hunter

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/bumphunter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bumphunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumphunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumphunter/meta.yaml>`_
   :links: biotools: :biotools:`bumphunter`

   Tools for finding bumps in genomic data


.. conda:package:: bioconductor-bumphunter

   |downloads_bioconductor-bumphunter| |docker_bioconductor-bumphunter|

   :versions: 1.30.0-0, 1.28.0-0, 1.26.0-1, 1.24.5-1, 1.24.5-0, 1.22.0-0, 1.20.0-0, 1.16.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicfeatures: >=1.40.0,<1.41.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-locfit: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bumphunter

   and update with::

      conda update bioconductor-bumphunter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bumphunter:<tag>

   (see `bioconductor-bumphunter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bumphunter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bumphunter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bumphunter
   :alt:   (downloads)
.. |docker_bioconductor-bumphunter| image:: https://quay.io/repository/biocontainers/bioconductor-bumphunter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bumphunter
.. _`bioconductor-bumphunter/tags`: https://quay.io/repository/biocontainers/bioconductor-bumphunter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bumphunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bumphunter/README.html