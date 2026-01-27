:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cfdna-biomarkersearch'
.. highlight: bash

cfdna-biomarkersearch
=====================

.. conda:recipe:: cfdna-biomarkersearch
   :replaces_section_title:
   :noindex:

   Pipeline to identify candidate cfDNA biomarker sequences from WGS data

   :homepage: https://github.com/avo-hcemm/cfDNA-biomarkers-pipeline
   :documentation: https://github.com/avo-hcemm/cfDNA-biomarkers-pipeline/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`cfdna-biomarkersearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfdna-biomarkersearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfdna-biomarkersearch/meta.yaml>`_

   cfDNA\-BiomarkerDiscovery is a pipeline designed to identify candidate biomarker sequences from cell\-free DNA \(cfDNA\) derived from blood samples. The pipeline takes as input\:
   •	An archive of FASTQ files containing paired\-end reads from whole\-genome sequencing \(WGS\) of one or more case cohorts and a control cohort.
   •	Additional required files\: adapter sequences\, genome version for download\, genome information file\, parameter file\, and an archive with genome FASTA files.
   The pipeline performs\:
   1.	Preprocessing\: adapter trimming\, quality filtering\, and alignment to the reference genome.
   2.	Analysis\: identification of candidate genomic regions as potential biomarkers.
   If informative regions are identified\, the pipeline generates a CSV file listing the candidate biomarker sequences along with their associated genomic coordinates.



.. conda:package:: cfdna-biomarkersearch

   |downloads_cfdna-biomarkersearch| |docker_cfdna-biomarkersearch|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends bowtie2: 
   :depends ca-certificates: 
   :depends curl: 
   :depends fastqc: 
   :depends gnupg: 
   :depends imbalanced-learn: 
   :depends multiqc: 
   :depends numpy: 
   :depends openjdk: ``>=21``
   :depends pandas: 
   :depends samtools: 
   :depends scikit-bio: 
   :depends scipy: 
   :depends sklearn-compat: 
   :depends tar: 
   :depends trimmomatic: 
   :depends unzip: 
   :depends wget: 
   :depends xgboost: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cfdna-biomarkersearch

   and update with::

      mamba update cfdna-biomarkersearch

  To create a new environment, run::

      mamba create --name myenvname cfdna-biomarkersearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cfdna-biomarkersearch:<tag>

   (see `cfdna-biomarkersearch/tags`_ for valid values for ``<tag>``)


.. |downloads_cfdna-biomarkersearch| image:: https://img.shields.io/conda/dn/bioconda/cfdna-biomarkersearch.svg?style=flat
   :target: https://anaconda.org/bioconda/cfdna-biomarkersearch
   :alt:   (downloads)
.. |docker_cfdna-biomarkersearch| image:: https://quay.io/repository/biocontainers/cfdna-biomarkersearch/status
   :target: https://quay.io/repository/biocontainers/cfdna-biomarkersearch
.. _`cfdna-biomarkersearch/tags`: https://quay.io/repository/biocontainers/cfdna-biomarkersearch?tab=tags


.. raw:: html

    <script>
        var package = "cfdna-biomarkersearch";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cfdna-biomarkersearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cfdna-biomarkersearch/README.html