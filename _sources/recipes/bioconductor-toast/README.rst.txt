:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-toast'
.. highlight: bash

bioconductor-toast
==================

.. conda:recipe:: bioconductor-toast
   :replaces_section_title:
   :noindex:

   Tools for the analysis of heterogeneous tissues

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TOAST.html
   :license: GPL-2
   :recipe: /`bioconductor-toast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-toast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-toast/meta.yaml>`_

   This package is devoted to analyzing high\-throughput data \(e.g. gene expression microarray\, DNA methylation microarray\, RNA\-seq\) from complex tissues. Current functionalities include 1. detect cell\-type specific or cross\-cell type differential signals 2. tree\-based differential analysis 3. improve variable selection in reference\-free deconvolution 4. partial reference\-free deconvolution with prior knowledge.


.. conda:package:: bioconductor-toast

   |downloads_bioconductor-toast| |docker_bioconductor-toast|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.7.1-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-epidish: ``>=2.18.0,<2.19.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-doparallel: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-nnls: 
   :depends r-quadprog: 
   :depends r-tidyr: 
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

      mamba install bioconductor-toast

   and update with::

      mamba update bioconductor-toast

  To create a new environment, run::

      mamba create --name myenvname bioconductor-toast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-toast:<tag>

   (see `bioconductor-toast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-toast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-toast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-toast
   :alt:   (downloads)
.. |docker_bioconductor-toast| image:: https://quay.io/repository/biocontainers/bioconductor-toast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-toast
.. _`bioconductor-toast/tags`: https://quay.io/repository/biocontainers/bioconductor-toast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-toast";
        var versions = ["1.16.0","1.14.0","1.12.0","1.7.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-toast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-toast/README.html