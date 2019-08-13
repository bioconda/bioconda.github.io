:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minimumdistance'
.. highlight: bash

bioconductor-minimumdistance
============================

.. conda:recipe:: bioconductor-minimumdistance
   :replaces_section_title:

   Analysis of de novo copy number variants in trios from high\-dimensional genotyping platforms.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MinimumDistance.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minimumdistance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minimumdistance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minimumdistance/meta.yaml>`_
   :links: biotools: :biotools:`minimumdistance`, doi: :doi:`10.1186/1471-2105-13-330`

   


.. conda:package:: bioconductor-minimumdistance

   |downloads_bioconductor-minimumdistance| |docker_bioconductor-minimumdistance|

   :versions: 1.28.0-1, 1.26.0-1, 1.26.0-0, 1.24.1-0, 1.22.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-dnacopy: >=1.58.0,<1.59.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-oligoclasses: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-vanillaice: >=1.46.0,<1.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-ff: 
   :depends r-foreach: 
   :depends r-lattice: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minimumdistance

   and update with::

      conda update bioconductor-minimumdistance

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minimumdistance:<tag>

   (see `bioconductor-minimumdistance/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minimumdistance| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minimumdistance.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minimumdistance
   :alt:   (downloads)
.. |docker_bioconductor-minimumdistance| image:: https://quay.io/repository/biocontainers/bioconductor-minimumdistance/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minimumdistance
.. _`bioconductor-minimumdistance/tags`: https://quay.io/repository/biocontainers/bioconductor-minimumdistance?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minimumdistance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minimumdistance/README.html