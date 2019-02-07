.. title:: Package Recipe 'bioconductor-ensembldb'
.. highlight: bash


bioconductor-ensembldb
======================

.. conda:recipe:: bioconductor-ensembldb
   :replaces_section_title:

   The package provides functions to create and use transcript centric annotation databases\/packages. The annotation for the databases are directly fetched from Ensembl using their Perl API. The functionality and data is similar to that of the TxDb packages from the GenomicFeatures package\, but\, in addition to retrieve all gene\/transcript models and annotations from the database\, ensembldb provides a filter framework allowing to retrieve annotations for specific entries like genes encoded on a chromosome region or transcript models of lincRNA genes. EnsDb databases built with ensembldb contain also protein annotations and mappings between proteins and their encoding transcripts. Finally\, ensembldb provides functions to map between genomic\, transcript and protein coordinates.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ensembldb.html
   :license: LGPL
   :recipe: /`bioconductor-ensembldb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensembldb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensembldb/meta.yaml>`_
   :links: biotools: :biotools:`ensembldb`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-ensembldb

   |downloads_bioconductor-ensembldb| |docker_bioconductor-ensembldb|

   :versions: 2.6.3, 2.4.1, 2.2.2, 2.2.0, 2.0.4, 1.6.2, 1.6.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-annotationfilter` >=1.6.0,<1.7.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-protgenerics` >=1.14.0,<1.15.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-curl`  :conda:package:`r-dbi`  :conda:package:`r-rsqlite` >=1.1 

   :required~by: |required_by_bioconductor-ensembldb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ensembldb

   and update with::

      conda update bioconductor-ensembldb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ensembldb


.. |required_by_bioconductor-ensembldb| conda:required_by:: bioconductor-ensembldb
.. |downloads_bioconductor-ensembldb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ensembldb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ensembldb| image:: https://quay.io/repository/biocontainers/bioconductor-ensembldb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ensembldb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ensembldb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ensembldb/README.html

