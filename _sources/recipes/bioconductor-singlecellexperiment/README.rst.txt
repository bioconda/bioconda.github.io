:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellexperiment'
.. highlight: bash

bioconductor-singlecellexperiment
=================================

.. conda:recipe:: bioconductor-singlecellexperiment
   :replaces_section_title:
   :noindex:

   S4 Classes for Single Cell Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SingleCellExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-singlecellexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellexperiment/meta.yaml>`_

   Defines a S4 class for storing data from single\-cell experiments. This includes specialized methods to store and retrieve spike\-in information\, dimensionality reduction coordinates and size factors for each cell\, along with the usual metadata for genes and libraries.


.. conda:package:: bioconductor-singlecellexperiment

   |downloads_bioconductor-singlecellexperiment| |docker_bioconductor-singlecellexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-singlecellexperiment

   and update with::

      mamba update bioconductor-singlecellexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-singlecellexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlecellexperiment:<tag>

   (see `bioconductor-singlecellexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlecellexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecellexperiment
   :alt:   (downloads)
.. |docker_bioconductor-singlecellexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment
.. _`bioconductor-singlecellexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlecellexperiment";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellexperiment/README.html