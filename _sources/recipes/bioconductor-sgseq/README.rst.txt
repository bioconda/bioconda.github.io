:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sgseq'
.. highlight: bash

bioconductor-sgseq
==================

.. conda:recipe:: bioconductor-sgseq
   :replaces_section_title:
   :noindex:

   Splice event prediction and quantification from RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SGSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sgseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sgseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sgseq/meta.yaml>`_
   :links: biotools: :biotools:`sgseq`

   SGSeq is a software package for analyzing splice events from RNA\-seq data. Input data are RNA\-seq reads mapped to a reference genome in BAM format. Genes are represented as a splice graph\, which can be obtained from existing annotation or predicted from the mapped sequence reads. Splice events are identified from the graph and are quantified locally using structurally compatible reads at the start or end of each splice variant. The software includes functions for splice event prediction\, quantification\, visualization and interpretation.


.. conda:package:: bioconductor-sgseq

   |downloads_bioconductor-sgseq| |docker_bioconductor-sgseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.2-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-runit: 
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

      mamba install bioconductor-sgseq

   and update with::

      mamba update bioconductor-sgseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sgseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sgseq:<tag>

   (see `bioconductor-sgseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sgseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sgseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sgseq
   :alt:   (downloads)
.. |docker_bioconductor-sgseq| image:: https://quay.io/repository/biocontainers/bioconductor-sgseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sgseq
.. _`bioconductor-sgseq/tags`: https://quay.io/repository/biocontainers/bioconductor-sgseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sgseq";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sgseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sgseq/README.html