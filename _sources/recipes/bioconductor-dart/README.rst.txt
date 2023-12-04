:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dart'
.. highlight: bash

bioconductor-dart
=================

.. conda:recipe:: bioconductor-dart
   :replaces_section_title:
   :noindex:

   Denoising Algorithm based on Relevance network Topology

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DART.html
   :license: GPL-2
   :recipe: /`bioconductor-dart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dart/meta.yaml>`_

   Denoising Algorithm based on Relevance network Topology \(DART\) is an algorithm designed to evaluate the consistency of prior information molecular signatures \(e.g in\-vitro perturbation expression signatures\) in independent molecular data \(e.g gene expression data sets\). If consistent\, a pruning network strategy is then used to infer the activation status of the molecular signature in individual samples.


.. conda:package:: bioconductor-dart

   |downloads_bioconductor-dart| |docker_bioconductor-dart|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: ``>=0.6.0``
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

      mamba install bioconductor-dart

   and update with::

      mamba update bioconductor-dart

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dart

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dart:<tag>

   (see `bioconductor-dart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dart
   :alt:   (downloads)
.. |docker_bioconductor-dart| image:: https://quay.io/repository/biocontainers/bioconductor-dart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dart
.. _`bioconductor-dart/tags`: https://quay.io/repository/biocontainers/bioconductor-dart?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dart";
        var versions = ["1.50.0","1.48.0","1.46.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dart/README.html