.. title:: Package Recipe 'bioconductor-bumphunter'
.. highlight: bash


bioconductor-bumphunter
=======================

.. conda:recipe:: bioconductor-bumphunter
   :replaces_section_title:

   Tools for finding bumps in genomic data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bumphunter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bumphunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumphunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumphunter/meta.yaml>`_
   :links: biotools: :biotools:`bumphunter`

   


.. conda:package:: bioconductor-bumphunter

   |downloads_bioconductor-bumphunter| |docker_bioconductor-bumphunter|

   :versions: 1.24.5, 1.22.0, 1.20.0, 1.16.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dorng`  :conda:package:`r-foreach`  :conda:package:`r-iterators`  :conda:package:`r-locfit`  :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-bumphunter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bumphunter

   and update with::

      conda update bioconductor-bumphunter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bumphunter


.. |required_by_bioconductor-bumphunter| conda:required_by:: bioconductor-bumphunter
.. |downloads_bioconductor-bumphunter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bumphunter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bumphunter| image:: https://quay.io/repository/biocontainers/bioconductor-bumphunter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bumphunter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bumphunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bumphunter/README.html

