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

   :versions: 1.8.0, 1.6.2, 1.4.0, 1.2.0

   :depends: :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bookdown`  :conda:package:`r-devtools`  :conda:package:`r-git2r`  :conda:package:`r-httr`  :conda:package:`r-knitr`  :conda:package:`r-rmarkdown`  :conda:package:`r-rstudioapi`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-biocworkflowtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocworkflowtools

   and update with::

      conda update bioconductor-biocworkflowtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biocworkflowtools


.. |required_by_bioconductor-biocworkflowtools| conda:required_by:: bioconductor-biocworkflowtools
.. |downloads_bioconductor-biocworkflowtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocworkflowtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocworkflowtools| image:: https://quay.io/repository/biocontainers/bioconductor-biocworkflowtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocworkflowtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocworkflowtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocworkflowtools/README.html

