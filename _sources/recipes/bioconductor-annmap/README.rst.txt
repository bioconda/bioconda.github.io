.. title:: Package Recipe 'bioconductor-annmap'
.. highlight: bash


bioconductor-annmap
===================

.. conda:recipe:: bioconductor-annmap
   :replaces_section_title:

   annmap provides annotation mappings for Affymetrix exon arrays and coordinate based queries to support deep sequencing data analysis. Database access is hidden behind the API which provides a set of functions such as genesInRange\(\)\, geneToExon\(\)\, exonDetails\(\)\, etc. Functions to plot gene architecture and BAM file data are also provided. Underlying data are from Ensembl.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/annmap.html
   :license: GPL-2
   :recipe: /`bioconductor-annmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annmap/meta.yaml>`_
   :links: biotools: :biotools:`annmap`, doi: :doi:`10.1093/nar/gkm779`

   


.. conda:package:: bioconductor-annmap

   |downloads_bioconductor-annmap| |docker_bioconductor-annmap|

   :versions: 1.24.0, 1.22.0, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-digest`  :conda:package:`r-lattice`  :conda:package:`r-rmysql` >=0.6-0 

   :required~by: |required_by_bioconductor-annmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annmap

   and update with::

      conda update bioconductor-annmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-annmap


.. |required_by_bioconductor-annmap| conda:required_by:: bioconductor-annmap
.. |downloads_bioconductor-annmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-annmap| image:: https://quay.io/repository/biocontainers/bioconductor-annmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annmap/README.html

