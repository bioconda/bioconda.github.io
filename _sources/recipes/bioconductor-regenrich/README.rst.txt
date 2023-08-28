:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regenrich'
.. highlight: bash

bioconductor-regenrich
======================

.. conda:recipe:: bioconductor-regenrich
   :replaces_section_title:
   :noindex:

   Gene regulator enrichment analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RegEnrich.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-regenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regenrich/meta.yaml>`_

   This package is a pipeline to identify the key gene regulators in a biological process\, for example in cell differentiation and in cell development after stimulation. There are four major steps in this pipeline\: \(1\) differential expression analysis\; \(2\) regulator\-target network inference\; \(3\) enrichment analysis\; and \(4\) regulators scoring and ranking.


.. conda:package:: bioconductor-regenrich

   |downloads_bioconductor-regenrich| |docker_bioconductor-regenrich|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biocset: ``>=1.14.0,<1.15.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-dose: ``>=3.26.0,<3.27.0``
   :depends bioconductor-fgsea: ``>=1.26.0,<1.27.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-magrittr: 
   :depends r-randomforest: 
   :depends r-reshape2: 
   :depends r-tibble: 
   :depends r-wgcna: 
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

      mamba install bioconductor-regenrich

   and update with::

      mamba update bioconductor-regenrich

  To create a new environment, run::

      mamba create --name myenvname bioconductor-regenrich

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regenrich:<tag>

   (see `bioconductor-regenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regenrich
   :alt:   (downloads)
.. |docker_bioconductor-regenrich| image:: https://quay.io/repository/biocontainers/bioconductor-regenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regenrich
.. _`bioconductor-regenrich/tags`: https://quay.io/repository/biocontainers/bioconductor-regenrich?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regenrich";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regenrich/README.html