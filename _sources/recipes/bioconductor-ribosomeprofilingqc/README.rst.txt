:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ribosomeprofilingqc'
.. highlight: bash

bioconductor-ribosomeprofilingqc
================================

.. conda:recipe:: bioconductor-ribosomeprofilingqc
   :replaces_section_title:
   :noindex:

   Ribosome Profiling Quality Control

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ribosomeProfilingQC.html
   :license: GPL (>=3) + file LICENSE
   :recipe: /`bioconductor-ribosomeprofilingqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribosomeprofilingqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribosomeprofilingqc/meta.yaml>`_

   Ribo\-Seq \(also named ribosome profiling or footprinting\) measures translatome \(unlike RNA\-Seq\, which sequences the transcriptome\) by direct quantification of the ribosome\-protected fragments \(RPFs\). This package provides the tools for quality assessment of ribosome profiling. In addition\, it can preprocess Ribo\-Seq data for subsequent differential analysis.


.. conda:package:: bioconductor-ribosomeprofilingqc

   |downloads_bioconductor-ribosomeprofilingqc| |docker_bioconductor-ribosomeprofilingqc|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-edaseq: ``>=2.40.0,<2.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-motifstack: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsubread: ``>=2.20.0,<2.21.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-ruvseq: ``>=1.40.0,<1.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-ggextra: 
   :depends r-ggfittext: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-scales: 
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

      mamba install bioconductor-ribosomeprofilingqc

   and update with::

      mamba update bioconductor-ribosomeprofilingqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ribosomeprofilingqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ribosomeprofilingqc:<tag>

   (see `bioconductor-ribosomeprofilingqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ribosomeprofilingqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ribosomeprofilingqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ribosomeprofilingqc
   :alt:   (downloads)
.. |docker_bioconductor-ribosomeprofilingqc| image:: https://quay.io/repository/biocontainers/bioconductor-ribosomeprofilingqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ribosomeprofilingqc
.. _`bioconductor-ribosomeprofilingqc/tags`: https://quay.io/repository/biocontainers/bioconductor-ribosomeprofilingqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ribosomeprofilingqc";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ribosomeprofilingqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ribosomeprofilingqc/README.html