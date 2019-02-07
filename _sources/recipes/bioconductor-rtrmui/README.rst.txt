.. title:: Package Recipe 'bioconductor-rtrmui'
.. highlight: bash


bioconductor-rtrmui
===================

.. conda:recipe:: bioconductor-rtrmui
   :replaces_section_title:

   This package provides a web interface to compute transcriptional regulatory modules with rTRM.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rTRMui.html
   :license: GPL-3
   :recipe: /`bioconductor-rtrmui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtrmui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtrmui/meta.yaml>`_
   :links: biotools: :biotools:`rtrmui`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rtrmui

   |downloads_bioconductor-rtrmui| |docker_bioconductor-rtrmui|

   :versions: 1.20.0, 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`bioconductor-motifdb` >=1.24.0,<1.25.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-rtrm` >=1.20.0,<1.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-shiny` >=0.9 

   :required~by: |required_by_bioconductor-rtrmui|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtrmui

   and update with::

      conda update bioconductor-rtrmui

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rtrmui


.. |required_by_bioconductor-rtrmui| conda:required_by:: bioconductor-rtrmui
.. |downloads_bioconductor-rtrmui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtrmui.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rtrmui| image:: https://quay.io/repository/biocontainers/bioconductor-rtrmui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtrmui







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtrmui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtrmui/README.html

