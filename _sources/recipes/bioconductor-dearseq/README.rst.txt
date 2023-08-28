:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dearseq'
.. highlight: bash

bioconductor-dearseq
====================

.. conda:recipe:: bioconductor-dearseq
   :replaces_section_title:
   :noindex:

   Differential Expression Analysis for RNA\-seq data through a robust variance component test

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/dearseq.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-dearseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dearseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dearseq/meta.yaml>`_

   Differential Expression Analysis RNA\-seq data with variance component score test accounting for data heteroscedasticity through precision weights. Perform both gene\-wise and gene set analyses\, and can deal with repeated or longitudinal data. Methods are detailed in\: i\) Agniel D \& Hejblum BP \(2017\) Variance component score test for time\-course gene set analysis of longitudinal RNA\-seq data\, Biostatistics\, 18\(4\)\:589\-604 \; and ii\) Gauthier M\, Agniel D\, Thiébaut R \& Hejblum BP \(2020\) dearseq\: a variance component score test for RNA\-Seq differential analysis that effectively controls the false discovery rate\, NAR Genomics and Bioinformatics\, 2\(4\)\:lqaa093.


.. conda:package:: bioconductor-dearseq

   |downloads_bioconductor-dearseq| |docker_bioconductor-dearseq|

   :versions:
      
      

      ``1.12.1-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-compquadform: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-kernsmooth: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-pbapply: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scattermore: 
   :depends r-statmod: 
   :depends r-survey: 
   :depends r-tibble: 
   :depends r-viridislite: 
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

      mamba install bioconductor-dearseq

   and update with::

      mamba update bioconductor-dearseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dearseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dearseq:<tag>

   (see `bioconductor-dearseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dearseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dearseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dearseq
   :alt:   (downloads)
.. |docker_bioconductor-dearseq| image:: https://quay.io/repository/biocontainers/bioconductor-dearseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dearseq
.. _`bioconductor-dearseq/tags`: https://quay.io/repository/biocontainers/bioconductor-dearseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dearseq";
        var versions = ["1.12.1","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dearseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dearseq/README.html