:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bufferedmatrixmethods'
.. highlight: bash

bioconductor-bufferedmatrixmethods
==================================

.. conda:recipe:: bioconductor-bufferedmatrixmethods
   :replaces_section_title:
   :noindex:

   Microarray Data related methods that utlize BufferedMatrix objects

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BufferedMatrixMethods.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bufferedmatrixmethods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bufferedmatrixmethods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bufferedmatrixmethods/meta.yaml>`_
   :links: biotools: :biotools:`bufferedmatrixmethods`, doi: :doi:`10.1038/nmeth.3252`

   Microarray analysis methods that use BufferedMatrix objects


.. conda:package:: bioconductor-bufferedmatrixmethods

   |downloads_bioconductor-bufferedmatrixmethods| |docker_bioconductor-bufferedmatrixmethods|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.61.0-1</code>,  <code>1.61.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.64.0-0``,  ``1.61.0-1``,  ``1.61.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bufferedmatrix: ``>=1.66.0,<1.67.0``
   :depends bioconductor-bufferedmatrix: ``>=1.66.0,<1.67.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-bufferedmatrixmethods

   and update with::

      mamba update bioconductor-bufferedmatrixmethods

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bufferedmatrixmethods

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bufferedmatrixmethods:<tag>

   (see `bioconductor-bufferedmatrixmethods/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bufferedmatrixmethods| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bufferedmatrixmethods.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bufferedmatrixmethods
   :alt:   (downloads)
.. |docker_bioconductor-bufferedmatrixmethods| image:: https://quay.io/repository/biocontainers/bioconductor-bufferedmatrixmethods/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bufferedmatrixmethods
.. _`bioconductor-bufferedmatrixmethods/tags`: https://quay.io/repository/biocontainers/bioconductor-bufferedmatrixmethods?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bufferedmatrixmethods";
        var versions = ["1.66.0","1.64.0","1.61.0","1.61.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bufferedmatrixmethods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bufferedmatrixmethods/README.html