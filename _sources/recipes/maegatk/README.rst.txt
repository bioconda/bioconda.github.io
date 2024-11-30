:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maegatk'
.. highlight: bash

maegatk
=======

.. conda:recipe:: maegatk
   :replaces_section_title:
   :noindex:

   Mitochondrial Alteration Enrichment and Genome Analysis Toolkit.

   :homepage: https://github.com/caleblareau/maegatk
   :documentation: https://github.com/caleblareau/maegatk/wiki
   
   :license: MIT / MIT
   :recipe: /`maegatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maegatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maegatk/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-022-01210-8`

   Processing and quality control of mitochondrial genome variants from MAESTER data.


.. conda:package:: maegatk

   |downloads_maegatk| |docker_maegatk|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-summarizedexperiment: 
   :depends biopython: 
   :depends bwa: 
   :depends click: 
   :depends fgbio-minimal: 
   :depends freebayes: 
   :depends openjdk: 
   :depends optparse-pretty: 
   :depends pulp: ``<2.8``
   :depends pysam: 
   :depends pytest: 
   :depends python: ``>=3``
   :depends r-base: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-matrix: 
   :depends regex: 
   :depends ruamel.yaml: ``0.16.12.*``
   :depends samtools: 
   :depends snakemake-minimal: ``<8``
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

      mamba install maegatk

   and update with::

      mamba update maegatk

  To create a new environment, run::

      mamba create --name myenvname maegatk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maegatk:<tag>

   (see `maegatk/tags`_ for valid values for ``<tag>``)


.. |downloads_maegatk| image:: https://img.shields.io/conda/dn/bioconda/maegatk.svg?style=flat
   :target: https://anaconda.org/bioconda/maegatk
   :alt:   (downloads)
.. |docker_maegatk| image:: https://quay.io/repository/biocontainers/maegatk/status
   :target: https://quay.io/repository/biocontainers/maegatk
.. _`maegatk/tags`: https://quay.io/repository/biocontainers/maegatk?tab=tags


.. raw:: html

    <script>
        var package = "maegatk";
        var versions = ["0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maegatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maegatk/README.html