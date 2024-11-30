:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssdrippipeline'
.. highlight: bash

ssdrippipeline
==============

.. conda:recipe:: ssdrippipeline
   :replaces_section_title:
   :noindex:

   Useful tools for the analysis of ssDRIP\-seq data

   :homepage: https://github.com/PEHGP/ssDripPipeline
   :documentation: https://github.com/PEHGP/ssDripPipeline/wiki
   
   :license: GPL3
   :recipe: /`ssdrippipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssdrippipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssdrippipeline/meta.yaml>`_

   


.. conda:package:: ssdrippipeline

   |downloads_ssdrippipeline| |docker_ssdrippipeline|

   :versions:
      
      

      ``0.0.5-0``

      

   
   :depends bedtools: ``>=2.29.2``
   :depends bioconductor-deseq2: ``>=1.32.0``
   :depends bioconductor-mfuzz: ``>=2.52.0``
   :depends biopython: ``>=1.78``
   :depends bowtie2: ``>=2.3.5.1``
   :depends deeptools: ``>=3.5.0``
   :depends homer: ``>=4.11``
   :depends macs2: ``>=2.2.7.1``
   :depends matplotlib-base: ``>=3.1.3``
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.0.1``
   :depends picard: ``>=2.24.2``
   :depends python: ``>=3.7``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: ``>=3.1.1``
   :depends samtools: ``>=1.7``
   :depends scipy: ``>=1.4.1``
   :depends seaborn: ``>=0.10.0``
   :depends ucsc-bedgraphtobigwig: 
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

      mamba install ssdrippipeline

   and update with::

      mamba update ssdrippipeline

  To create a new environment, run::

      mamba create --name myenvname ssdrippipeline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ssdrippipeline:<tag>

   (see `ssdrippipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_ssdrippipeline| image:: https://img.shields.io/conda/dn/bioconda/ssdrippipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/ssdrippipeline
   :alt:   (downloads)
.. |docker_ssdrippipeline| image:: https://quay.io/repository/biocontainers/ssdrippipeline/status
   :target: https://quay.io/repository/biocontainers/ssdrippipeline
.. _`ssdrippipeline/tags`: https://quay.io/repository/biocontainers/ssdrippipeline?tab=tags


.. raw:: html

    <script>
        var package = "ssdrippipeline";
        var versions = ["0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssdrippipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssdrippipeline/README.html