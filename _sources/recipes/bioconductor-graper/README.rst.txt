:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graper'
.. highlight: bash

bioconductor-graper
===================

.. conda:recipe:: bioconductor-graper
   :replaces_section_title:
   :noindex:

   Adaptive penalization in high\-dimensional regression and classification with external covariates using variational Bayes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/graper.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-graper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graper/meta.yaml>`_

   This package enables regression and classification on high\-dimensional data with different relative strengths of penalization for different feature groups\, such as different assays or omic types. The optimal relative strengths are chosen adaptively. Optimisation is performed using a variational Bayes approach.


.. conda:package:: bioconductor-graper

   |downloads_bioconductor-graper| |docker_bioconductor-graper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-graper

   and update with::

      mamba update bioconductor-graper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-graper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-graper:<tag>

   (see `bioconductor-graper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-graper
   :alt:   (downloads)
.. |docker_bioconductor-graper| image:: https://quay.io/repository/biocontainers/bioconductor-graper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graper
.. _`bioconductor-graper/tags`: https://quay.io/repository/biocontainers/bioconductor-graper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-graper";
        var versions = ["1.22.0","1.18.0","1.16.1","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graper/README.html