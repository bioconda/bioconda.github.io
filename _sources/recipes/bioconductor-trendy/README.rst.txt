:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trendy'
.. highlight: bash

bioconductor-trendy
===================

.. conda:recipe:: bioconductor-trendy
   :replaces_section_title:
   :noindex:

   Breakpoint analysis of time\-course expression data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Trendy.html
   :license: GPL-3
   :recipe: /`bioconductor-trendy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trendy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trendy/meta.yaml>`_

   Trendy implements segmented \(or breakpoint\) regression models to estimate breakpoints which represent changes in expression for each feature\/gene in high throughput data with ordered conditions.


.. conda:package:: bioconductor-trendy

   |downloads_bioconductor-trendy| |docker_bioconductor-trendy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.1-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dt: 
   :depends r-gplots: 
   :depends r-magrittr: 
   :depends r-segmented: 
   :depends r-shiny: 
   :depends r-shinyfiles: 
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

      mamba install bioconductor-trendy

   and update with::

      mamba update bioconductor-trendy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-trendy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trendy:<tag>

   (see `bioconductor-trendy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trendy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trendy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trendy
   :alt:   (downloads)
.. |docker_bioconductor-trendy| image:: https://quay.io/repository/biocontainers/bioconductor-trendy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trendy
.. _`bioconductor-trendy/tags`: https://quay.io/repository/biocontainers/bioconductor-trendy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trendy";
        var versions = ["1.28.0","1.24.1","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trendy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trendy/README.html