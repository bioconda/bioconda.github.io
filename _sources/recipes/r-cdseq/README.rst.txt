:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cdseq'
.. highlight: bash

r-cdseq
=======

.. conda:recipe:: r-cdseq
   :replaces_section_title:
   :noindex:

   Estimate cell\-type\-specific gene expression profiles and sample\-specific cell\-type proportions simultaneously using bulk sequencing data. Kang et al. \(2019\) \<doi\:10.1371\/journal.pcbi.1007510\>.

   :homepage: https://github.com/omnideconv/CDSeq
   :license: GPL / GPL-3
   :recipe: /`r-cdseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cdseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cdseq/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1007510`

   


.. conda:package:: r-cdseq

   |downloads_r-cdseq| |docker_r-cdseq|

   :versions:
      
      

      ``0-5``,  ``0-3``,  ``0-2``,  ``0-1``,  ``0-0``

      

   
   :depends bioconductor-biobase: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-clue: 
   :depends r-dirmult: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gplots: 
   :depends r-harmony: 
   :depends r-iterators: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-qlcmatrix: 
   :depends r-rcpp: ``>=1.0.3``
   :depends r-rcppthread: 
   :depends r-rlang: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-cdseq

   and update with::

      mamba update r-cdseq

  To create a new environment, run::

      mamba create --name myenvname r-cdseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cdseq:<tag>

   (see `r-cdseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cdseq| image:: https://img.shields.io/conda/dn/bioconda/r-cdseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cdseq
   :alt:   (downloads)
.. |docker_r-cdseq| image:: https://quay.io/repository/biocontainers/r-cdseq/status
   :target: https://quay.io/repository/biocontainers/r-cdseq
.. _`r-cdseq/tags`: https://quay.io/repository/biocontainers/r-cdseq?tab=tags


.. raw:: html

    <script>
        var package = "r-cdseq";
        var versions = ["0","0","0","0","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cdseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cdseq/README.html