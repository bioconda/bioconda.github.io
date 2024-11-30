:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matrixgenerics'
.. highlight: bash

bioconductor-matrixgenerics
===========================

.. conda:recipe:: bioconductor-matrixgenerics
   :replaces_section_title:
   :noindex:

   S4 Generic Summary Statistic Functions that Operate on Matrix\-Like Objects

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MatrixGenerics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-matrixgenerics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixgenerics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixgenerics/meta.yaml>`_

   S4 generic functions modeled after the \'matrixStats\' API for alternative matrix implementations. Packages with alternative matrix implementation can depend on this package and implement the generic functions that are defined here for a useful set of row and column summary statistics. Other package developers can import this package and handle a different matrix implementations without worrying about incompatibilities.


.. conda:package:: bioconductor-matrixgenerics

   |downloads_bioconductor-matrixgenerics| |docker_bioconductor-matrixgenerics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-3</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.14.0-3``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: ``>=1.0.0``
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

      mamba install bioconductor-matrixgenerics

   and update with::

      mamba update bioconductor-matrixgenerics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-matrixgenerics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-matrixgenerics:<tag>

   (see `bioconductor-matrixgenerics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-matrixgenerics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matrixgenerics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matrixgenerics
   :alt:   (downloads)
.. |docker_bioconductor-matrixgenerics| image:: https://quay.io/repository/biocontainers/bioconductor-matrixgenerics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matrixgenerics
.. _`bioconductor-matrixgenerics/tags`: https://quay.io/repository/biocontainers/bioconductor-matrixgenerics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-matrixgenerics";
        var versions = ["1.14.0","1.14.0","1.14.0","1.14.0","1.12.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matrixgenerics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matrixgenerics/README.html