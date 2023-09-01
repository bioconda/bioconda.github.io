:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treeio'
.. highlight: bash

bioconductor-treeio
===================

.. conda:recipe:: bioconductor-treeio
   :replaces_section_title:
   :noindex:

   Base Classes and Functions for Phylogenetic Tree Input and Output

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/treeio.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-treeio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeio/meta.yaml>`_

   \'treeio\' is an R package to make it easier to import and store phylogenetic tree with associated data\; and to link external data from different sources to phylogeny. It also supports exporting phylogenetic tree with heterogeneous associated data to a single tree file and can be served as a platform for merging tree with associated data and converting file formats.


.. conda:package:: bioconductor-treeio

   |downloads_bioconductor-treeio| |docker_bioconductor-treeio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.1-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  <code>1.14.3-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  </span></summary>
      

      ``1.24.1-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.3-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.4.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidytree: ``>=0.3.9``
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

      mamba install bioconductor-treeio

   and update with::

      mamba update bioconductor-treeio

  To create a new environment, run::

      mamba create --name myenvname bioconductor-treeio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-treeio:<tag>

   (see `bioconductor-treeio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-treeio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treeio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treeio
   :alt:   (downloads)
.. |docker_bioconductor-treeio| image:: https://quay.io/repository/biocontainers/bioconductor-treeio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treeio
.. _`bioconductor-treeio/tags`: https://quay.io/repository/biocontainers/bioconductor-treeio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-treeio";
        var versions = ["1.24.1","1.22.0","1.18.0","1.16.1","1.14.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treeio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treeio/README.html