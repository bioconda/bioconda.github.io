:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylgsa'
.. highlight: bash

bioconductor-methylgsa
======================

.. conda:recipe:: bioconductor-methylgsa
   :replaces_section_title:
   :noindex:

   Gene Set Analysis Using the Outcome of Differential Methylation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/methylGSA.html
   :license: GPL-2
   :recipe: /`bioconductor-methylgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylgsa/meta.yaml>`_

   The main functions for methylGSA are methylglm and methylRRA. methylGSA implements logistic regression adjusting number of probes as a covariate. methylRRA adjusts multiple p\-values of each gene by Robust Rank Aggregation. For more detailed help information\, please see the vignette.


.. conda:package:: bioconductor-methylgsa

   |downloads_bioconductor-methylgsa| |docker_bioconductor-methylgsa|

   :versions:
      
      

      ``1.16.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.3-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-clusterprofiler: ``>=4.6.0,<4.7.0``
   :depends bioconductor-go.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-missmethyl: ``>=1.32.0,<1.33.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-reactome.db: ``>=1.82.0,<1.83.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-robustrankaggreg: 
   :depends r-shiny: 
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

      mamba install bioconductor-methylgsa

   and update with::

      mamba update bioconductor-methylgsa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylgsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylgsa:<tag>

   (see `bioconductor-methylgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylgsa
   :alt:   (downloads)
.. |docker_bioconductor-methylgsa| image:: https://quay.io/repository/biocontainers/bioconductor-methylgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylgsa
.. _`bioconductor-methylgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-methylgsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylgsa";
        var versions = ["1.16.0","1.10.0","1.8.0","1.8.0","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylgsa/README.html