:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiornaseq'
.. highlight: bash

r-bcbiornaseq
=============

.. conda:recipe:: r-bcbiornaseq
   :replaces_section_title:
   :noindex:

   R package for bcbio RNA\-seq analysis.

   :homepage: https://r.acidgenomics.com/packages/bcbiornaseq/
   :developer docs: https://github.com/hbc/bcbioRNASeq
   :license: GPL / AGPL-3.0
   :recipe: /`r-bcbiornaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq/meta.yaml>`_

   


.. conda:package:: r-bcbiornaseq

   |downloads_r-bcbiornaseq| |docker_r-bcbiornaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-2</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-1</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-1</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.0-0``,  ``0.3.44-0``,  ``0.3.42-0``,  ``0.3.41-0``,  ``0.3.40-1``,  ``0.3.40-0``,  ``0.3.39-0``,  ``0.3.37-0``,  ``0.3.36-0``,  ``0.3.34-0``,  ``0.3.33-1``,  ``0.3.33-0``,  ``0.3.32-0``,  ``0.3.31-0``,  ``0.3.30-0``,  ``0.3.29-0``,  ``0.3.28-0``,  ``0.3.27-0``,  ``0.3.26-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.4-0``,  ``0.2.4a-0``,  ``0.2.3a-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-biocstyle: ``>=2.28.0``
   :depends bioconductor-clusterprofiler: ``>=4.8.0``
   :depends bioconductor-degreport: ``>=1.36.0``
   :depends bioconductor-deseq2: ``>=1.40.0``
   :depends bioconductor-dose: ``>=3.26.0``
   :depends bioconductor-edger: ``>=3.42.0``
   :depends bioconductor-enrichplot: ``>=1.20.0``
   :depends bioconductor-ensdb.hsapiens.v75: ``>=2.99.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.17.0``
   :depends bioconductor-pathview: ``>=1.40.0``
   :depends bioconductor-rhdf5: ``>=2.44.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends bioconductor-tximport: ``>=1.28.0``
   :depends bioconductor-vsn: ``>=3.68.0``
   :depends r-acidbase: ``>=0.7.0``
   :depends r-acidcli: ``>=0.3.0``
   :depends r-acidexperiment: ``>=0.5.0``
   :depends r-acidgenerics: ``>=0.7.2``
   :depends r-acidgenomes: ``>=0.6.0``
   :depends r-acidgsea: ``>=0.9.0``
   :depends r-acidmarkdown: ``>=0.3.0``
   :depends r-acidplots: ``>=0.7.1``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-basejump: ``>=0.18.0``
   :depends r-bcbiobase: ``>=0.9.0``
   :depends r-deseqanalysis: ``>=0.7.0``
   :depends r-ggnewscale: ``>=0.4.9``
   :depends r-ggplot2: ``>=3.4.3``
   :depends r-goalie: ``>=0.7.1``
   :depends r-hexbin: ``>=1.28.3``
   :depends r-knitr: ``>=1.44``
   :depends r-pheatmap: ``>=1.0.12``
   :depends r-pipette: ``>=0.14.0``
   :depends r-rmarkdown: ``>=2.25``
   :depends r-syntactic: ``>=0.7.0``
   :depends r-viridis: ``>=0.6.4``
   :depends r-withr: ``>=2.5.1``
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

      mamba install r-bcbiornaseq

   and update with::

      mamba update r-bcbiornaseq

  To create a new environment, run::

      mamba create --name myenvname r-bcbiornaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-bcbiornaseq:<tag>

   (see `r-bcbiornaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiornaseq| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiornaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiornaseq
   :alt:   (downloads)
.. |docker_r-bcbiornaseq| image:: https://quay.io/repository/biocontainers/r-bcbiornaseq/status
   :target: https://quay.io/repository/biocontainers/r-bcbiornaseq
.. _`r-bcbiornaseq/tags`: https://quay.io/repository/biocontainers/r-bcbiornaseq?tab=tags


.. raw:: html

    <script>
        var package = "r-bcbiornaseq";
        var versions = ["0.6.0","0.5.5","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiornaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiornaseq/README.html