:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quantpi'
.. highlight: bash

quantpi
=======

.. conda:recipe:: quantpi
   :replaces_section_title:
   :noindex:

   A general profiling system focus on robust microbiome research

   :homepage: https://github.com/ohmeta/quantpi
   :license: GPL / GPL-3.0-only
   :recipe: /`quantpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantpi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantpi/meta.yaml>`_
   :links: biotools: :biotools:`quantpi`

   


.. conda:package:: quantpi

   |downloads_quantpi| |docker_quantpi|

   :versions:
      
      

      ``1.0.0-0``,  ``0.2.0-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends bowtie2: 
   :depends bracken: ``>=2.7``
   :depends bwa: 
   :depends coverm: ``>=0.6.1``
   :depends fastp: 
   :depends fastqc: 
   :depends humann: 
   :depends kmcp: ``>=0.8.2``
   :depends kraken2: 
   :depends krakentools: ``>=1.2``
   :depends krona: 
   :depends matplotlib-base: 
   :depends metaphlan: 
   :depends multiqc: 
   :depends natsort: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pigz: 
   :depends python: 
   :depends ruamel.yaml: 
   :depends sambamba: 
   :depends samtools: 
   :depends seaborn: 
   :depends seqkit: 
   :depends snakemake: 
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

      mamba install quantpi

   and update with::

      mamba update quantpi

  To create a new environment, run::

      mamba create --name myenvname quantpi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quantpi:<tag>

   (see `quantpi/tags`_ for valid values for ``<tag>``)


.. |downloads_quantpi| image:: https://img.shields.io/conda/dn/bioconda/quantpi.svg?style=flat
   :target: https://anaconda.org/bioconda/quantpi
   :alt:   (downloads)
.. |docker_quantpi| image:: https://quay.io/repository/biocontainers/quantpi/status
   :target: https://quay.io/repository/biocontainers/quantpi
.. _`quantpi/tags`: https://quay.io/repository/biocontainers/quantpi?tab=tags


.. raw:: html

    <script>
        var package = "quantpi";
        var versions = ["1.0.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quantpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quantpi/README.html