:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-busseq'
.. highlight: bash

bioconductor-busseq
===================

.. conda:recipe:: bioconductor-busseq
   :replaces_section_title:
   :noindex:

   Batch Effect Correction with Unknow Subtypes for scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BUSseq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-busseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busseq/meta.yaml>`_

   BUSseq R package fits an interpretable Bayesian hierarchical model\-\-\-the Batch Effects Correction with Unknown Subtypes for scRNA seq Data \(BUSseq\)\-\-\-to correct batch effects in the presence of unknown cell types. BUSseq is able to simultaneously correct batch effects\, clusters cell types\, and takes care of the count data nature\, the overdispersion\, the dropout events\, and the cell\-specific sequencing depth of scRNA\-seq data. After correcting the batch effects with BUSseq\, the corrected value can be used for downstream analysis as if all cells were sequenced in a single batch. BUSseq can integrate read count matrices obtained from different scRNA\-seq platforms and allow cell types to be measured in some but not all of the batches as long as the experimental design fulfills the conditions listed in our manuscript.


.. conda:package:: bioconductor-busseq

   |downloads_bioconductor-busseq| |docker_bioconductor-busseq|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gplots: 
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

      mamba install bioconductor-busseq

   and update with::

      mamba update bioconductor-busseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-busseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-busseq:<tag>

   (see `bioconductor-busseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-busseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-busseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-busseq
   :alt:   (downloads)
.. |docker_bioconductor-busseq| image:: https://quay.io/repository/biocontainers/bioconductor-busseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-busseq
.. _`bioconductor-busseq/tags`: https://quay.io/repository/biocontainers/bioconductor-busseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-busseq";
        var versions = ["1.12.0","1.8.0","1.6.1","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-busseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-busseq/README.html