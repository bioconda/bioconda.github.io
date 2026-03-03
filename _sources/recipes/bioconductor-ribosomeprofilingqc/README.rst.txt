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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends bioconductor-edaseq: ``>=2.44.0,<2.45.0``
   :depends bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-motifstack: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsubread: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends bioconductor-ruvseq: ``>=1.44.0,<1.45.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends r-base: ``>=4.5,<4.6.0a0``
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
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
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