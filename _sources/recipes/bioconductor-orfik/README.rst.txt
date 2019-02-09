.. title:: Package Recipe 'bioconductor-orfik'
.. highlight: bash


bioconductor-orfik
==================

.. conda:recipe:: bioconductor-orfik
   :replaces_section_title:

   Tools for manipulation of RiboSeq\, RNASeq and CageSeq data. ORFik is extremely fast through use of C\, data.table and GenomicRanges. Package allows to reassign starts of the transcripts with the use of CageSeq data\, automatic shifting of RiboSeq reads\, finding of Open Reading Frames for the whole genomes and many more.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ORFik.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-orfik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfik/meta.yaml>`_

   


.. conda:package:: bioconductor-orfik

   |downloads_bioconductor-orfik| |docker_bioconductor-orfik|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table` >=1.10.4-3 :conda:package:`r-rcpp` >=0.12.16 

   :required~by: |required_by_bioconductor-orfik|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-orfik

   and update with::

      conda update bioconductor-orfik

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-orfik


.. |required_by_bioconductor-orfik| conda:required_by:: bioconductor-orfik
.. |downloads_bioconductor-orfik| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orfik.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-orfik| image:: https://quay.io/repository/biocontainers/bioconductor-orfik/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orfik







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orfik/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orfik/README.html

