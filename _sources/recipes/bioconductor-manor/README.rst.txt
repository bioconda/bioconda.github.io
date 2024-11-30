:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-manor'
.. highlight: bash

bioconductor-manor
==================

.. conda:recipe:: bioconductor-manor
   :replaces_section_title:
   :noindex:

   CGH Micro\-Array NORmalization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MANOR.html
   :license: GPL-2
   :recipe: /`bioconductor-manor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-manor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-manor/meta.yaml>`_

   Importation\, normalization\, visualization\, and quality control functions to correct identified sources of variability in array\-CGH experiments.


.. conda:package:: bioconductor-manor

   |downloads_bioconductor-manor| |docker_bioconductor-manor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.66.0-2</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.66.0-2``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-glad: ``>=2.66.0,<2.67.0``
   :depends bioconductor-glad: ``>=2.66.0,<2.67.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-manor

   and update with::

      mamba update bioconductor-manor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-manor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-manor:<tag>

   (see `bioconductor-manor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-manor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-manor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-manor
   :alt:   (downloads)
.. |docker_bioconductor-manor| image:: https://quay.io/repository/biocontainers/bioconductor-manor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-manor
.. _`bioconductor-manor/tags`: https://quay.io/repository/biocontainers/bioconductor-manor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-manor";
        var versions = ["1.74.0","1.72.0","1.70.0","1.70.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-manor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-manor/README.html