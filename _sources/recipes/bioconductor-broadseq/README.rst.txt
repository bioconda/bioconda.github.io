:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-broadseq'
.. highlight: bash

bioconductor-broadseq
=====================

.. conda:recipe:: bioconductor-broadseq
   :replaces_section_title:
   :noindex:

   broadSeq \: for streamlined exploration of RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/broadSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-broadseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-broadseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-broadseq/meta.yaml>`_

   This package helps user to do easily RNA\-seq data analysis with multiple methods \(usually which needs many different input formats\). Here the user will provid the expression data as a SummarizedExperiment object and will get results from different methods. It will help user to quickly evaluate different methods.


.. conda:package:: bioconductor-broadseq

   |downloads_bioconductor-broadseq| |docker_bioconductor-broadseq|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends bioconductor-delocal: ``>=1.6.0,<1.7.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-ebseq: ``>=2.4.0,<2.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-genefilter: ``>=1.88.0,<1.89.0``
   :depends bioconductor-noiseq: ``>=2.50.0,<2.51.0``
   :depends bioconductor-sechm: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-forcats: ``>=1.0.0``
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-ggpubr: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-purrr: ``>=0.3.5``
   :depends r-stringr: 
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

      mamba install bioconductor-broadseq

   and update with::

      mamba update bioconductor-broadseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-broadseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-broadseq:<tag>

   (see `bioconductor-broadseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-broadseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-broadseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-broadseq
   :alt:   (downloads)
.. |docker_bioconductor-broadseq| image:: https://quay.io/repository/biocontainers/bioconductor-broadseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-broadseq
.. _`bioconductor-broadseq/tags`: https://quay.io/repository/biocontainers/bioconductor-broadseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-broadseq";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-broadseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-broadseq/README.html