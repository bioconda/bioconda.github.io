:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-agdex'
.. highlight: bash

bioconductor-agdex
==================

.. conda:recipe:: bioconductor-agdex
   :replaces_section_title:
   :noindex:

   Agreement of Differential Expression Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/AGDEX.html
   :license: GPL Version 2 or later
   :recipe: /`bioconductor-agdex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agdex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agdex/meta.yaml>`_
   :links: biotools: :biotools:`agdex`, doi: :doi:`10.1093/bioinformatics/btr362`

   A tool to evaluate agreement of differential expression for cross\-species genomics


.. conda:package:: bioconductor-agdex

   |downloads_bioconductor-agdex| |docker_bioconductor-agdex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
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

      mamba install bioconductor-agdex

   and update with::

      mamba update bioconductor-agdex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-agdex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-agdex:<tag>

   (see `bioconductor-agdex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-agdex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-agdex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-agdex
   :alt:   (downloads)
.. |docker_bioconductor-agdex| image:: https://quay.io/repository/biocontainers/bioconductor-agdex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-agdex
.. _`bioconductor-agdex/tags`: https://quay.io/repository/biocontainers/bioconductor-agdex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-agdex";
        var versions = ["1.50.0","1.48.0","1.46.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-agdex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-agdex/README.html