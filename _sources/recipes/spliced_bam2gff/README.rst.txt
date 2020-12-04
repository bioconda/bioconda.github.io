:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spliced_bam2gff'
.. highlight: bash

spliced_bam2gff
===============

.. conda:recipe:: spliced_bam2gff
   :replaces_section_title:
   :noindex:

   A tool to convert spliced BAM alignments into GFF2 format

   :homepage: https://github.com/nanoporetech/spliced_bam2gff
   :license: MOZILLA / MPL-2
   :recipe: /`spliced_bam2gff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliced_bam2gff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliced_bam2gff/meta.yaml>`_

   The spliced\_bam2gff tool converts BAM alignments\, produced by spliced aligners \(such as minimap2\, gmap\)\, into a GFF2 format.

   By default\, introns are created based on the N cigar feature. Alternatively\, if \-d \(i.e. for deletion\) is specified\, any deletions larger than the limit will be classified as an intron. The orientation of the GFF2 features is determined by the XS strand tag and SAM flags depending on the aligner.

   The tool supports splitting the output into loci and bundles of loci with a minimum number of features\, which enables easy parallelisation of downstream analyses. 



.. conda:package:: spliced_bam2gff

   |downloads_spliced_bam2gff| |docker_spliced_bam2gff|

   :versions:
      
      

      ``1.2-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spliced_bam2gff

   and update with::

      conda update spliced_bam2gff

   or use the docker container::

      docker pull quay.io/biocontainers/spliced_bam2gff:<tag>

   (see `spliced_bam2gff/tags`_ for valid values for ``<tag>``)


.. |downloads_spliced_bam2gff| image:: https://img.shields.io/conda/dn/bioconda/spliced_bam2gff.svg?style=flat
   :target: https://anaconda.org/bioconda/spliced_bam2gff
   :alt:   (downloads)
.. |docker_spliced_bam2gff| image:: https://quay.io/repository/biocontainers/spliced_bam2gff/status
   :target: https://quay.io/repository/biocontainers/spliced_bam2gff
.. _`spliced_bam2gff/tags`: https://quay.io/repository/biocontainers/spliced_bam2gff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spliced_bam2gff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spliced_bam2gff/README.html