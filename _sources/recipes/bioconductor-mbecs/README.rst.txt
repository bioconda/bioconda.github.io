:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbecs'
.. highlight: bash

bioconductor-mbecs
==================

.. conda:recipe:: bioconductor-mbecs
   :replaces_section_title:
   :noindex:

   Evaluation and correction of batch effects in microbiome data\-sets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MBECS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mbecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbecs/meta.yaml>`_

   The Microbiome Batch Effect Correction Suite \(MBECS\) provides a set of functions to evaluate and mitigate unwated noise due to processing in batches. To that end it incorporates a host of batch correcting algorithms \(BECA\) from various packages. In addition it offers a correction and reporting pipeline that provides a preliminary look at the characteristics of a data\-set before and after correcting for batch effects.


.. conda:package:: bioconductor-mbecs

   |downloads_bioconductor-mbecs| |docker_bioconductor-mbecs|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-phyloseq: ``>=1.50.0,<1.51.0``
   :depends bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-pheatmap: 
   :depends r-rmarkdown: 
   :depends r-ruv: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
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

      mamba install bioconductor-mbecs

   and update with::

      mamba update bioconductor-mbecs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mbecs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbecs:<tag>

   (see `bioconductor-mbecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbecs
   :alt:   (downloads)
.. |docker_bioconductor-mbecs| image:: https://quay.io/repository/biocontainers/bioconductor-mbecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbecs
.. _`bioconductor-mbecs/tags`: https://quay.io/repository/biocontainers/bioconductor-mbecs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbecs";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbecs/README.html