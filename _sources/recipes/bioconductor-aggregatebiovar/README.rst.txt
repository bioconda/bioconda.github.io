:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aggregatebiovar'
.. highlight: bash

bioconductor-aggregatebiovar
============================

.. conda:recipe:: bioconductor-aggregatebiovar
   :replaces_section_title:
   :noindex:

   Differential Gene Expression Analysis for Multi\-subject scRNA\-seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/aggregateBioVar.html
   :license: GPL-3
   :recipe: /`bioconductor-aggregatebiovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aggregatebiovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aggregatebiovar/meta.yaml>`_

   For single cell RNA\-seq data collected from more than one subject \(e.g. biological sample or technical replicates\)\, this package contains tools to summarize single cell gene expression profiles at the level of subject. A SingleCellExperiment object is taken as input and converted to a list of SummarizedExperiment objects\, where each list element corresponds to an assigned cell type. The SummarizedExperiment objects contain aggregate gene\-by\-subject count matrices and inter\-subject column metadata for individual subjects that can be processed using downstream bulk RNA\-seq tools.


.. conda:package:: bioconductor-aggregatebiovar

   |downloads_bioconductor-aggregatebiovar| |docker_bioconductor-aggregatebiovar|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-3``,  ``1.0.0-2``

      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-rlang: 
   :depends r-tibble: 
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

      mamba install bioconductor-aggregatebiovar

   and update with::

      mamba update bioconductor-aggregatebiovar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-aggregatebiovar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aggregatebiovar:<tag>

   (see `bioconductor-aggregatebiovar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aggregatebiovar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aggregatebiovar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aggregatebiovar
   :alt:   (downloads)
.. |docker_bioconductor-aggregatebiovar| image:: https://quay.io/repository/biocontainers/bioconductor-aggregatebiovar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aggregatebiovar
.. _`bioconductor-aggregatebiovar/tags`: https://quay.io/repository/biocontainers/bioconductor-aggregatebiovar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aggregatebiovar";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aggregatebiovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aggregatebiovar/README.html