:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coveb'
.. highlight: bash

bioconductor-coveb
==================

.. conda:recipe:: bioconductor-coveb
   :replaces_section_title:
   :noindex:

   Empirical Bayes estimate of block diagonal covariance matrices

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/covEB.html
   :license: GPL-3
   :recipe: /`bioconductor-coveb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coveb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coveb/meta.yaml>`_

   Using bayesian methods to estimate correlation matrices assuming that they can be written and estimated as block diagonal matrices. These block diagonal matrices are determined using shrinkage parameters that values below this parameter to zero.


.. conda:package:: bioconductor-coveb

   |downloads_bioconductor-coveb| |docker_bioconductor-coveb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gsl: 
   :depends r-igraph: 
   :depends r-laplacesdemon: 
   :depends r-matrix: 
   :depends r-mvtnorm: 
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

      mamba install bioconductor-coveb

   and update with::

      mamba update bioconductor-coveb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-coveb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coveb:<tag>

   (see `bioconductor-coveb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coveb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coveb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coveb
   :alt:   (downloads)
.. |docker_bioconductor-coveb| image:: https://quay.io/repository/biocontainers/bioconductor-coveb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coveb
.. _`bioconductor-coveb/tags`: https://quay.io/repository/biocontainers/bioconductor-coveb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-coveb";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coveb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coveb/README.html