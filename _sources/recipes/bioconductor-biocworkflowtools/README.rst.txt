:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocworkflowtools'
.. highlight: bash

bioconductor-biocworkflowtools
==============================

.. conda:recipe:: bioconductor-biocworkflowtools
   :replaces_section_title:

   Provides functions to ease the transition between Rmarkdown and LaTeX documents when authoring a Bioconductor Workflow.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocWorkflowTools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocworkflowtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocworkflowtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocworkflowtools/meta.yaml>`_
   :links: biotools: :biotools:`BiocWorkflowTools`

   


.. conda:package:: bioconductor-biocworkflowtools

   |downloads_bioconductor-biocworkflowtools| |docker_bioconductor-biocworkflowtools|

   :versions: 1.8.0-0, 1.6.2-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-biocstyle: >=2.10.0,<2.11.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bookdown: 
   :depends r-devtools: 
   :depends r-git2r: 
   :depends r-httr: 
   :depends r-knitr: 
   :depends r-rmarkdown: 
   :depends r-rstudioapi: 
   :depends r-stringr: 
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
   :alt:   (downloads)
.. |docker_bioconductor-biocworkflowtools| image:: https://quay.io/repository/biocontainers/bioconductor-biocworkflowtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocworkflowtools
.. _`bioconductor-biocworkflowtools/tags`: https://quay.io/repository/biocontainers/bioconductor-biocworkflowtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocworkflowtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocworkflowtools/README.html