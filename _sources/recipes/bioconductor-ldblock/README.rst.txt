:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ldblock'
.. highlight: bash

bioconductor-ldblock
====================

.. conda:recipe:: bioconductor-ldblock
   :replaces_section_title:
   :noindex:

   data structures for linkage disequilibrium measures in populations

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ldblock.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ldblock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ldblock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ldblock/meta.yaml>`_

   Define data structures for linkage disequilibrium measures in populations.


.. conda:package:: bioconductor-ldblock

   |downloads_bioconductor-ldblock| |docker_bioconductor-ldblock|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-matrix: 
   :depends r-rlang: 
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

      mamba install bioconductor-ldblock

   and update with::

      mamba update bioconductor-ldblock

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ldblock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ldblock:<tag>

   (see `bioconductor-ldblock/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ldblock| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ldblock.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ldblock
   :alt:   (downloads)
.. |docker_bioconductor-ldblock| image:: https://quay.io/repository/biocontainers/bioconductor-ldblock/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ldblock
.. _`bioconductor-ldblock/tags`: https://quay.io/repository/biocontainers/bioconductor-ldblock?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ldblock";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ldblock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ldblock/README.html