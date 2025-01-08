:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwastools'
.. highlight: bash

bioconductor-gwastools
======================

.. conda:recipe:: bioconductor-gwastools
   :replaces_section_title:
   :noindex:

   Tools for Genome Wide Association Studies

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GWASTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gwastools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwastools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwastools/meta.yaml>`_

   Classes for storing very large GWAS data sets and annotation\, and functions for GWAS data cleaning and analysis.


.. conda:package:: bioconductor-gwastools

   |downloads_bioconductor-gwastools| |docker_bioconductor-gwastools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-dnacopy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0``
   :depends bioconductor-quantsmooth: ``>=1.72.0,<1.73.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dbi: 
   :depends r-gwasexacthw: 
   :depends r-lmtest: 
   :depends r-logistf: 
   :depends r-rsqlite: 
   :depends r-sandwich: 
   :depends r-survival: 
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

      mamba install bioconductor-gwastools

   and update with::

      mamba update bioconductor-gwastools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gwastools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwastools:<tag>

   (see `bioconductor-gwastools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwastools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwastools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwastools
   :alt:   (downloads)
.. |docker_bioconductor-gwastools| image:: https://quay.io/repository/biocontainers/bioconductor-gwastools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwastools
.. _`bioconductor-gwastools/tags`: https://quay.io/repository/biocontainers/bioconductor-gwastools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gwastools";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwastools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwastools/README.html