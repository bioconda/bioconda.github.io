:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhesusprobe'
.. highlight: bash

bioconductor-rhesusprobe
========================

.. conda:recipe:: bioconductor-rhesusprobe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Rhesus\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/rhesusprobe.html
   :license: LGPL
   :recipe: /`bioconductor-rhesusprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhesusprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhesusprobe/meta.yaml>`_

   


.. conda:package:: bioconductor-rhesusprobe

   |downloads_bioconductor-rhesusprobe| |docker_bioconductor-rhesusprobe|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhesusprobe

   and update with::

      conda update bioconductor-rhesusprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhesusprobe:<tag>

   (see `bioconductor-rhesusprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhesusprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhesusprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhesusprobe
   :alt:   (downloads)
.. |docker_bioconductor-rhesusprobe| image:: https://quay.io/repository/biocontainers/bioconductor-rhesusprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhesusprobe
.. _`bioconductor-rhesusprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-rhesusprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhesusprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhesusprobe/README.html