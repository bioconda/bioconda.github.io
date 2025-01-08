:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-schex'
.. highlight: bash

bioconductor-schex
==================

.. conda:recipe:: bioconductor-schex
   :replaces_section_title:
   :noindex:

   Hexbin plots for single cell omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/schex.html
   :license: GPL-3
   :recipe: /`bioconductor-schex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schex/meta.yaml>`_

   Builds hexbin plots for variables and dimension reduction stored in single cell omics data such as SingleCellExperiment. The ideas used in this package are based on the excellent work of Dan Carr\, Nicholas Lewin\-Koh\, Martin Maechler and Thomas Lumley.


.. conda:package:: bioconductor-schex

   |downloads_bioconductor-schex| |docker_bioconductor-schex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-concaveman: 
   :depends r-dplyr: 
   :depends r-entropy: 
   :depends r-ggforce: 
   :depends r-ggplot2: ``>=3.2.1``
   :depends r-hexbin: 
   :depends r-rlang: 
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

      mamba install bioconductor-schex

   and update with::

      mamba update bioconductor-schex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-schex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-schex:<tag>

   (see `bioconductor-schex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-schex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-schex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-schex
   :alt:   (downloads)
.. |docker_bioconductor-schex| image:: https://quay.io/repository/biocontainers/bioconductor-schex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-schex
.. _`bioconductor-schex/tags`: https://quay.io/repository/biocontainers/bioconductor-schex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-schex";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-schex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-schex/README.html