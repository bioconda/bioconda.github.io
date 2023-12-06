:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqdata.hnrnpc.bam.chr14'
.. highlight: bash

bioconductor-rnaseqdata.hnrnpc.bam.chr14
========================================

.. conda:recipe:: bioconductor-rnaseqdata.hnrnpc.bam.chr14
   :replaces_section_title:
   :noindex:

   Aligned reads from RNAseq experiment\: Transcription profiling by high throughput sequencing of HNRNPC knockdown and control HeLa cells

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/RNAseqData.HNRNPC.bam.chr14.html
   :license: LGPL
   :recipe: /`bioconductor-rnaseqdata.hnrnpc.bam.chr14 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqdata.hnrnpc.bam.chr14>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqdata.hnrnpc.bam.chr14/meta.yaml>`_

   The package contains 8 BAM files\, 1 per sequencing run. Each BAM file was obtained by \(1\) aligning the reads \(paired\-end\) to the full hg19 genome with TopHat2\, and then \(2\) subsetting to keep only alignments on chr14. See accession number E\-MTAB\-1147 in the ArrayExpress database for details about the experiment\, including links to the published study \(by Zarnack et al.\, 2012\) and to the FASTQ files.


.. conda:package:: bioconductor-rnaseqdata.hnrnpc.bam.chr14

   |downloads_bioconductor-rnaseqdata.hnrnpc.bam.chr14| |docker_bioconductor-rnaseqdata.hnrnpc.bam.chr14|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.35.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.27.0-0</code>,  </span></summary>
      

      ``0.40.0-0``,  ``0.38.0-0``,  ``0.35.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.22.0-0``,  ``0.20.0-1``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rnaseqdata.hnrnpc.bam.chr14

   and update with::

      mamba update bioconductor-rnaseqdata.hnrnpc.bam.chr14

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnaseqdata.hnrnpc.bam.chr14

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqdata.hnrnpc.bam.chr14:<tag>

   (see `bioconductor-rnaseqdata.hnrnpc.bam.chr14/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqdata.hnrnpc.bam.chr14| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqdata.hnrnpc.bam.chr14.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaseqdata.hnrnpc.bam.chr14
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqdata.hnrnpc.bam.chr14| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqdata.hnrnpc.bam.chr14/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqdata.hnrnpc.bam.chr14
.. _`bioconductor-rnaseqdata.hnrnpc.bam.chr14/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqdata.hnrnpc.bam.chr14?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaseqdata.hnrnpc.bam.chr14";
        var versions = ["0.40.0","0.38.0","0.35.0","0.32.0","0.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqdata.hnrnpc.bam.chr14/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqdata.hnrnpc.bam.chr14/README.html