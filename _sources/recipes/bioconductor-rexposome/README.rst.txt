:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rexposome'
.. highlight: bash

bioconductor-rexposome
======================

.. conda:recipe:: bioconductor-rexposome
   :replaces_section_title:
   :noindex:

   Exposome exploration and outcome data analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rexposome.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rexposome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rexposome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rexposome/meta.yaml>`_

   Package that allows to explore the exposome and to perform association analyses between exposures and health outcomes.


.. conda:package:: bioconductor-rexposome

   |downloads_bioconductor-rexposome| |docker_bioconductor-rexposome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.1-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.4-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.4-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-corrplot: 
   :depends r-factominer: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-glmnet: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-gtools: 
   :depends r-hmisc: 
   :depends r-imputelcmd: 
   :depends r-lme4: 
   :depends r-lsr: 
   :depends r-mice: 
   :depends r-pryr: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-scatterplot3d: 
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

      mamba install bioconductor-rexposome

   and update with::

      mamba update bioconductor-rexposome

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rexposome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rexposome:<tag>

   (see `bioconductor-rexposome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rexposome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rexposome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rexposome
   :alt:   (downloads)
.. |docker_bioconductor-rexposome| image:: https://quay.io/repository/biocontainers/bioconductor-rexposome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rexposome
.. _`bioconductor-rexposome/tags`: https://quay.io/repository/biocontainers/bioconductor-rexposome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rexposome";
        var versions = ["1.28.0","1.24.1","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rexposome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rexposome/README.html