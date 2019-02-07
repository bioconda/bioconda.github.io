.. title:: Package Recipe 'bioconductor-rnaseqdata.hnrnpc.bam.chr14'
.. highlight: bash


bioconductor-rnaseqdata.hnrnpc.bam.chr14
========================================

.. conda:recipe:: bioconductor-rnaseqdata.hnrnpc.bam.chr14
   :replaces_section_title:

   The package contains 8 BAM files\, 1 per sequencing run. Each BAM file was obtained by \(1\) aligning the reads \(paired\-end\) to the full hg19 genome with TopHat2\, and then \(2\) subsetting to keep only alignments on chr14. See accession number E\-MTAB\-1147 in the ArrayExpress database for details about the experiment\, including links to the published study \(by Zarnack et al.\, 2012\) and to the FASTQ files.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RNAseqData.HNRNPC.bam.chr14.html
   :license: LGPL
   :recipe: /`bioconductor-rnaseqdata.hnrnpc.bam.chr14 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqdata.hnrnpc.bam.chr14>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqdata.hnrnpc.bam.chr14/meta.yaml>`_

   


.. conda:package:: bioconductor-rnaseqdata.hnrnpc.bam.chr14

   |downloads_bioconductor-rnaseqdata.hnrnpc.bam.chr14| |docker_bioconductor-rnaseqdata.hnrnpc.bam.chr14|

   :versions: 0.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rnaseqdata.hnrnpc.bam.chr14|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqdata.hnrnpc.bam.chr14

   and update with::

      conda update bioconductor-rnaseqdata.hnrnpc.bam.chr14

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rnaseqdata.hnrnpc.bam.chr14


.. |required_by_bioconductor-rnaseqdata.hnrnpc.bam.chr14| conda:required_by:: bioconductor-rnaseqdata.hnrnpc.bam.chr14
.. |downloads_bioconductor-rnaseqdata.hnrnpc.bam.chr14| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqdata.hnrnpc.bam.chr14.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqdata.hnrnpc.bam.chr14| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqdata.hnrnpc.bam.chr14/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqdata.hnrnpc.bam.chr14







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqdata.hnrnpc.bam.chr14/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqdata.hnrnpc.bam.chr14/README.html

