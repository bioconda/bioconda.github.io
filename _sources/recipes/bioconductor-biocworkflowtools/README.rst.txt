:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocworkflowtools'
.. highlight: bash

bioconductor-biocworkflowtools
==============================

.. conda:recipe:: bioconductor-biocworkflowtools
   :replaces_section_title:
   :noindex:

   Tools to aid the development of Bioconductor Workflow packages

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BiocWorkflowTools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocworkflowtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocworkflowtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocworkflowtools/meta.yaml>`_
   :links: biotools: :biotools:`BiocWorkflowTools`

   Provides functions to ease the transition between Rmarkdown and LaTeX documents when authoring a Bioconductor Workflow.


.. conda:package:: bioconductor-biocworkflowtools

   |downloads_bioconductor-biocworkflowtools| |docker_bioconductor-biocworkflowtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.28.0,<2.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bookdown: 
   :depends r-git2r: 
   :depends r-httr: 
   :depends r-knitr: 
   :depends r-rmarkdown: 
   :depends r-rstudioapi: 
   :depends r-stringr: 
   :depends r-usethis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocworkflowtools

   and update with::

      conda update bioconductor-biocworkflowtools

   or use the docker container::

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
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
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