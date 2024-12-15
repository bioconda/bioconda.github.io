:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirtarrnaseq'
.. highlight: bash

bioconductor-mirtarrnaseq
=========================

.. conda:recipe:: bioconductor-mirtarrnaseq
   :replaces_section_title:
   :noindex:

   mirTarRnaSeq

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mirTarRnaSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mirtarrnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirtarrnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirtarrnaseq/meta.yaml>`_

   mirTarRnaSeq R package can be used for interactive mRNA miRNA sequencing statistical analysis. This package utilizes expression or differential expression mRNA and miRNA sequencing results and performs interactive correlation and various GLMs \(Regular GLM\, Multivariate GLM\, and Interaction GLMs \) analysis between mRNA and miRNA expriments. These experiments can be time point experiments\, and or condition expriments.


.. conda:package:: bioconductor-mirtarrnaseq

   |downloads_bioconductor-mirtarrnaseq| |docker_bioconductor-mirtarrnaseq|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-catools: 
   :depends r-corrplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-pheatmap: 
   :depends r-pscl: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-reshape2: 
   :depends r-viridis: 
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

      mamba install bioconductor-mirtarrnaseq

   and update with::

      mamba update bioconductor-mirtarrnaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirtarrnaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirtarrnaseq:<tag>

   (see `bioconductor-mirtarrnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirtarrnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirtarrnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirtarrnaseq
   :alt:   (downloads)
.. |docker_bioconductor-mirtarrnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-mirtarrnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirtarrnaseq
.. _`bioconductor-mirtarrnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-mirtarrnaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirtarrnaseq";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirtarrnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirtarrnaseq/README.html