:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxplore'
.. highlight: bash

bioconductor-tenxplore
======================

.. conda:recipe:: bioconductor-tenxplore
   :replaces_section_title:
   :noindex:

   ontological exploration of scRNA\-seq of 1.3 million mouse neurons from 10x genomics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tenXplore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tenxplore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxplore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxplore/meta.yaml>`_

   Perform ontological exploration of scRNA\-seq of 1.3 million mouse neurons from 10x genomics.


.. conda:package:: bioconductor-tenxplore

   |downloads_bioconductor-tenxplore| |docker_bioconductor-tenxplore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-ontoproc: ``>=2.0.0,<2.1.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrixstats: 
   :depends r-shiny: 
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

      mamba install bioconductor-tenxplore

   and update with::

      mamba update bioconductor-tenxplore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tenxplore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tenxplore:<tag>

   (see `bioconductor-tenxplore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tenxplore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxplore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxplore
   :alt:   (downloads)
.. |docker_bioconductor-tenxplore| image:: https://quay.io/repository/biocontainers/bioconductor-tenxplore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxplore
.. _`bioconductor-tenxplore/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxplore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenxplore";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxplore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxplore/README.html