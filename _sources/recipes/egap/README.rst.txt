:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'egap'
.. highlight: bash

egap
====

.. conda:recipe:: egap
   :replaces_section_title:
   :noindex:

   EGAP pipeline for genome assembly and QC analysis

   :homepage: https://github.com/iPsychonaut/EGAP
   :license: BSD-3-Clause
   :recipe: /`egap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egap/meta.yaml>`_

   EGAP \(Entheome Genome Assembly Pipeline\) is a versatile bioinformatics
   pipeline for hybrid genome assembly from Oxford Nanopore\, Illumina\, and
   PacBio data. It supports multiple input modes and assembly methods and
   determines the best based on multiple metrics\: BUSCO Completeness
   \(Single \+ Duplicated\)\, Assembly Contig Count\, Assembly N50\, Assembly L50\,
   and Assembly GC\-content.



.. conda:package:: egap

   |downloads_egap| |docker_egap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.4-0</code>,  <code>3.3c-0</code>,  <code>3.2c-0</code>,  <code>3.1-0</code>,  <code>3.1b-0</code>,  <code>3.0.0f-0</code>,  <code>3.0.0b-0</code>,  <code>2.6.6-0</code>,  <code>2.6.5-0</code>,  </span></summary>
      

      ``3.3.4-0``,  ``3.3c-0``,  ``3.2c-0``,  ``3.1-0``,  ``3.1b-0``,  ``3.0.0f-0``,  ``3.0.0b-0``,  ``2.6.6-0``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.2-0``,  ``2.5.4-0``,  ``2.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends abyss: ``>=2.0.2``
   :depends bamtools: ``>=2.5.2``
   :depends bbmap: ``>=39.15``
   :depends beautifulsoup4: ``>=4.12.3``
   :depends bifrost: ``>=1.3.5``
   :depends biopython: ``>=1.81``
   :depends busco: ``>=5.8.2``
   :depends bwa-mem2: ``>=2.2.1``
   :depends compleasm: ``>=0.2.6``
   :depends fastqc: ``>=0.12.1``
   :depends filtlong: ``>=0.2.1``
   :depends flye: ``>=2.9.5``
   :depends geopy: ``>=2.4.1``
   :depends gfatools: ``>=0.5``
   :depends hifiasm: ``>=0.21.0``
   :depends jinja2: ``>=3.1.4``
   :depends kmc: ``>=3.2.4``
   :depends masurca: ``>=4.1.2``
   :depends matplotlib-base: ``>=3.7.3``
   :depends minimap2: ``>=2.28``
   :depends nanoplot: ``>=1.43.0``
   :depends ncbi-datasets-cli: ``>=16.39.0``
   :depends openpyxl: ``>=3.1.5``
   :depends pbccs: ``>=6.4.0``
   :depends pilon: ``>=1.22``
   :depends psutil: ``>=6.0.0``
   :depends purge_dups: ``>=1.2.6``
   :depends pyinaturalist: ``>=0.20``
   :depends python: ``>=3.8,<3.9``
   :depends quast: ``>=5.2.0``
   :depends racon: ``>=1.5.0``
   :depends ragtag: ``>=2.1.0``
   :depends ratatosk: ``>=0.9.0``
   :depends samtools: ``>=1.21``
   :depends sepp: ``>=4.5.1``
   :depends spades: ``>=4.0.0``
   :depends sra-tools: ``>=3.2.0``
   :depends tabulate: ``>=0.9.0``
   :depends termcolor: ``>=2.3.0``
   :depends tgsgapcloser: ``>=1.2.1``
   :depends trimmomatic: ``>=0.39``
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

      mamba install egap

   and update with::

      mamba update egap

  To create a new environment, run::

      mamba create --name myenvname egap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/egap:<tag>

   (see `egap/tags`_ for valid values for ``<tag>``)


.. |downloads_egap| image:: https://img.shields.io/conda/dn/bioconda/egap.svg?style=flat
   :target: https://anaconda.org/bioconda/egap
   :alt:   (downloads)
.. |docker_egap| image:: https://quay.io/repository/biocontainers/egap/status
   :target: https://quay.io/repository/biocontainers/egap
.. _`egap/tags`: https://quay.io/repository/biocontainers/egap?tab=tags


.. raw:: html

    <script>
        var package = "egap";
        var versions = ["3.3.4","3.3c","3.2c","3.1","3.1b"];
    </script>





Notes
-----
This package installs a custom executable named \"EGAP\" in \$PREFIX\/bin.
Please refer to the upstream GitHub page for usage instructions.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/egap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/egap/README.html