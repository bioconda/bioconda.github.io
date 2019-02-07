.. title:: Package Recipe 'bioconductor-minimumdistance'
.. highlight: bash


bioconductor-minimumdistance
============================

.. conda:recipe:: bioconductor-minimumdistance
   :replaces_section_title:

   Analysis of de novo copy number variants in trios from high\-dimensional genotyping platforms.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MinimumDistance.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minimumdistance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minimumdistance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minimumdistance/meta.yaml>`_
   :links: biotools: :biotools:`minimumdistance`, doi: :doi:`10.1186/1471-2105-13-330`

   


.. conda:package:: bioconductor-minimumdistance

   |downloads_bioconductor-minimumdistance| |docker_bioconductor-minimumdistance|

   :versions: 1.26.0, 1.24.1, 1.22.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-oligoclasses` >=1.44.0,<1.45.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-vanillaice` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ff`  :conda:package:`r-foreach`  :conda:package:`r-lattice`  :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-minimumdistance|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minimumdistance

   and update with::

      conda update bioconductor-minimumdistance

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-minimumdistance


.. |required_by_bioconductor-minimumdistance| conda:required_by:: bioconductor-minimumdistance
.. |downloads_bioconductor-minimumdistance| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minimumdistance.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-minimumdistance| image:: https://quay.io/repository/biocontainers/bioconductor-minimumdistance/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minimumdistance







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minimumdistance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minimumdistance/README.html

