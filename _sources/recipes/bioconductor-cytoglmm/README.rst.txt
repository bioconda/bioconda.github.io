:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytoglmm'
.. highlight: bash

bioconductor-cytoglmm
=====================

.. conda:recipe:: bioconductor-cytoglmm
   :replaces_section_title:
   :noindex:

   Conditional Differential Analysis for Flow and Mass Cytometry Experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CytoGLMM.html
   :license: LGPL-3
   :recipe: /`bioconductor-cytoglmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoglmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoglmm/meta.yaml>`_

   The CytoGLMM R package implements two multiple regression strategies\: A bootstrapped generalized linear model \(GLM\) and a generalized linear mixed model \(GLMM\). Most current data analysis tools compare expressions across many computationally discovered cell types. CytoGLMM focuses on just one cell type. Our narrower field of application allows us to define a more specific statistical model with easier to control statistical guarantees. As a result\, CytoGLMM finds differential proteins in flow and mass cytometry data while reducing biases arising from marker correlations and safeguarding against false discoveries induced by patient heterogeneity.


.. conda:package:: bioconductor-cytoglmm

   |downloads_bioconductor-cytoglmm| |docker_bioconductor-cytoglmm|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-caret: 
   :depends r-cowplot: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-factoextra: 
   :depends r-flexmix: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-logging: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-mbest: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-strucchange: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-cytoglmm

   and update with::

      mamba update bioconductor-cytoglmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytoglmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytoglmm:<tag>

   (see `bioconductor-cytoglmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytoglmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytoglmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytoglmm
   :alt:   (downloads)
.. |docker_bioconductor-cytoglmm| image:: https://quay.io/repository/biocontainers/bioconductor-cytoglmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytoglmm
.. _`bioconductor-cytoglmm/tags`: https://quay.io/repository/biocontainers/bioconductor-cytoglmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytoglmm";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytoglmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytoglmm/README.html