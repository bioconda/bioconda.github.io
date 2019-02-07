.. title:: Package Recipe 'bioconductor-pharmacogx'
.. highlight: bash


bioconductor-pharmacogx
=======================

.. conda:recipe:: bioconductor-pharmacogx
   :replaces_section_title:

   Contains a set of functions to perform large\-scale analysis of pharmacogenomic data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PharmacoGx.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pharmacogx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pharmacogx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pharmacogx/meta.yaml>`_

   


.. conda:package:: bioconductor-pharmacogx

   |downloads_bioconductor-pharmacogx| |docker_bioconductor-pharmacogx|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-piano` >=1.22.0,<1.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-catools`  :conda:package:`r-downloader`  :conda:package:`r-lsa`  :conda:package:`r-magicaxis`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-pharmacogx|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pharmacogx

   and update with::

      conda update bioconductor-pharmacogx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pharmacogx


.. |required_by_bioconductor-pharmacogx| conda:required_by:: bioconductor-pharmacogx
.. |downloads_bioconductor-pharmacogx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pharmacogx.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pharmacogx| image:: https://quay.io/repository/biocontainers/bioconductor-pharmacogx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pharmacogx







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pharmacogx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pharmacogx/README.html

