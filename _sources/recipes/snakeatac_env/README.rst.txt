:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakeatac_env'
.. highlight: bash

snakeatac_env
=============

.. conda:recipe:: snakeatac_env
   :replaces_section_title:
   :noindex:

   snakemake based ATACseq pipeline

   :homepage: https://github.com/sebastian-gregoricchio/snakeATAC
   :documentation: https://github.com/sebastian-gregoricchio/snakeATAC/wiki
   
   :license: GPL-3.0-or-later
   :recipe: /`snakeatac_env <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeatac_env>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeatac_env/meta.yaml>`_

   


.. conda:package:: snakeatac_env

   |downloads_snakeatac_env| |docker_snakeatac_env|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends bcftools: 
   :depends bedtools: 
   :depends bioconductor-copywriter: 
   :depends bioconductor-shortread: 
   :depends bioinfokit: 
   :depends biopython: 
   :depends bwa-mem2: 
   :depends bzip2: 
   :depends cutadapt: 
   :depends deeptools: ``>=3.5.2``
   :depends docutils: 
   :depends fastcluster: 
   :depends fastqc: 
   :depends gatk4: 
   :depends logomaker: 
   :depends macs3: 
   :depends matplotlib-base: 
   :depends multiqc: ``>=1.23``
   :depends numpydoc: 
   :depends pandas: 
   :depends pdfcombine: 
   :depends pip: 
   :depends py-bgzip: 
   :depends py2bit: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: 
   :depends r-colorspace: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-generics: 
   :depends r-ggplot2: 
   :depends r-ggtext: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-snow: 
   :depends r-stringr: 
   :depends r-viridis: 
   :depends samtools: 
   :depends scipy: 
   :depends seaborn: 
   :depends snakemake: ``>=7.24.0``
   :depends snpsift: 
   :depends subread: 
   :depends tobias: 
   :depends ucsc-bedgraphtobigwig: 
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

      mamba install snakeatac_env

   and update with::

      mamba update snakeatac_env

  To create a new environment, run::

      mamba create --name myenvname snakeatac_env

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakeatac_env:<tag>

   (see `snakeatac_env/tags`_ for valid values for ``<tag>``)


.. |downloads_snakeatac_env| image:: https://img.shields.io/conda/dn/bioconda/snakeatac_env.svg?style=flat
   :target: https://anaconda.org/bioconda/snakeatac_env
   :alt:   (downloads)
.. |docker_snakeatac_env| image:: https://quay.io/repository/biocontainers/snakeatac_env/status
   :target: https://quay.io/repository/biocontainers/snakeatac_env
.. _`snakeatac_env/tags`: https://quay.io/repository/biocontainers/snakeatac_env?tab=tags


.. raw:: html

    <script>
        var package = "snakeatac_env";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakeatac_env/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakeatac_env/README.html