:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocworkflowtools'
.. highlight: bash

bioconductor-biocworkflowtools
==============================

.. conda:recipe:: bioconductor-biocworkflowtools
   :replaces_section_title:
   :noindex:

   Tools to aid the development of Bioconductor Workflow packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiocWorkflowTools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocworkflowtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocworkflowtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocworkflowtools/meta.yaml>`_
   :links: biotools: :biotools:`BiocWorkflowTools`

   Provides functions to ease the transition between Rmarkdown and LaTeX documents when authoring a Bioconductor Workflow.


.. conda:package:: bioconductor-biocworkflowtools

   |downloads_bioconductor-biocworkflowtools| |docker_bioconductor-biocworkflowtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bookdown: 
   :depends r-git2r: 
   :depends r-httr: 
   :depends r-knitr: 
   :depends r-rmarkdown: 
   :depends r-rstudioapi: 
   :depends r-stringr: 
   :depends r-usethis: 
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

      mamba install bioconductor-biocworkflowtools

   and update with::

      mamba update bioconductor-biocworkflowtools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocworkflowtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocworkflowtools:<tag>

   (see `bioconductor-biocworkflowtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocworkflowtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocworkflowtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocworkflowtools
   :alt:   (downloads)
.. |docker_bioconductor-biocworkflowtools| image:: https://quay.io/repository/biocontainers/bioconductor-biocworkflowtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocworkflowtools
.. _`bioconductor-biocworkflowtools/tags`: https://quay.io/repository/biocontainers/bioconductor-biocworkflowtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocworkflowtools";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocworkflowtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocworkflowtools/README.html