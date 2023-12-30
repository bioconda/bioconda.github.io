:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-derfinderhelper'
.. highlight: bash

bioconductor-derfinderhelper
============================

.. conda:recipe:: bioconductor-derfinderhelper
   :replaces_section_title:
   :noindex:

   derfinder helper package

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/derfinderHelper.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-derfinderhelper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderhelper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderhelper/meta.yaml>`_
   :links: biotools: :biotools:`derfinderhelper`

   Helper package for speeding up the derfinder package when using multiple cores. This package is particularly useful when using BiocParallel and it helps reduce the time spent loading the full derfinder package when running the F\-statistics calculation in parallel.


.. conda:package:: bioconductor-derfinderhelper

   |downloads_bioconductor-derfinderhelper| |docker_bioconductor-derfinderhelper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.1-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-derfinderhelper

   and update with::

      mamba update bioconductor-derfinderhelper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-derfinderhelper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-derfinderhelper:<tag>

   (see `bioconductor-derfinderhelper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-derfinderhelper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinderhelper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-derfinderhelper
   :alt:   (downloads)
.. |docker_bioconductor-derfinderhelper| image:: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper
.. _`bioconductor-derfinderhelper/tags`: https://quay.io/repository/biocontainers/bioconductor-derfinderhelper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-derfinderhelper";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinderhelper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinderhelper/README.html