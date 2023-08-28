:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-top'
.. highlight: bash

bioconductor-top
================

.. conda:recipe:: bioconductor-top
   :replaces_section_title:
   :noindex:

   TOP Constructs Transferable Model Across Gene Expression Platforms

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TOP.html
   :license: GPL-3
   :recipe: /`bioconductor-top <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-top>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-top/meta.yaml>`_

   TOP constructs a transferable model across gene expression platforms for prospective experiments. Such a transferable model can be trained to make predictions on independent validation data with an accuracy that is similar to a re\-substituted model. The TOP procedure also has the flexibility to be adapted to suit the most common clinical response variables\, including linear response\, binomial and Cox PH models.


.. conda:package:: bioconductor-top

   |downloads_bioconductor-top| |docker_bioconductor-top|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-classifyr: ``>=3.4.0,<3.5.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-directpa: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggrepel: 
   :depends r-ggthemes: 
   :depends r-glmnet: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-latex2exp: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-proc: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-statmod: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-tidyr: 
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

      mamba install bioconductor-top

   and update with::

      mamba update bioconductor-top

  To create a new environment, run::

      mamba create --name myenvname bioconductor-top

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-top:<tag>

   (see `bioconductor-top/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-top| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-top.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-top
   :alt:   (downloads)
.. |docker_bioconductor-top| image:: https://quay.io/repository/biocontainers/bioconductor-top/status
   :target: https://quay.io/repository/biocontainers/bioconductor-top
.. _`bioconductor-top/tags`: https://quay.io/repository/biocontainers/bioconductor-top?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-top";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-top/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-top/README.html