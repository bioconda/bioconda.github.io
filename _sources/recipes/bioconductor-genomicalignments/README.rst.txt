.. title:: Package Recipe 'bioconductor-genomicalignments'
.. highlight: bash


bioconductor-genomicalignments
==============================

.. conda:recipe:: bioconductor-genomicalignments
   :replaces_section_title:

   Provides efficient containers for storing and manipulating short genomic alignments \(typically obtained by aligning short reads to a reference genome\). This includes read counting\, computing the coverage\, junction detection\, and working with the nucleotide content of the alignments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenomicAlignments.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicalignments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicalignments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicalignments/meta.yaml>`_
   :links: biotools: :biotools:`genomicalignments`

   


.. conda:package:: bioconductor-genomicalignments

   |downloads_bioconductor-genomicalignments| |docker_bioconductor-genomicalignments|

   :versions: 1.18.0, 1.16.0, 1.14.1, 1.14.0, 1.12.2, 1.10.0, 1.8.4, 1.6.3, 1.6.1, 1.6.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-genomicalignments|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicalignments

   and update with::

      conda update bioconductor-genomicalignments

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomicalignments


.. |required_by_bioconductor-genomicalignments| conda:required_by:: bioconductor-genomicalignments
.. |downloads_bioconductor-genomicalignments| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicalignments.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomicalignments| image:: https://quay.io/repository/biocontainers/bioconductor-genomicalignments/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicalignments







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicalignments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicalignments/README.html

