:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-u133x3pprobe'
.. highlight: bash

bioconductor-u133x3pprobe
=========================

.. conda:recipe:: bioconductor-u133x3pprobe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was U133\\\_X3P\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/u133x3pprobe.html
   :license: LGPL
   :recipe: /`bioconductor-u133x3pprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-u133x3pprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-u133x3pprobe/meta.yaml>`_

   


.. conda:package:: bioconductor-u133x3pprobe

   |downloads_bioconductor-u133x3pprobe| |docker_bioconductor-u133x3pprobe|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-u133x3pprobe

   and update with::

      conda update bioconductor-u133x3pprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-u133x3pprobe:<tag>

   (see `bioconductor-u133x3pprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-u133x3pprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-u133x3pprobe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-u133x3pprobe| image:: https://quay.io/repository/biocontainers/bioconductor-u133x3pprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-u133x3pprobe
.. _`bioconductor-u133x3pprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-u133x3pprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-u133x3pprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-u133x3pprobe/README.html