:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95bprobe'
.. highlight: bash

bioconductor-hgu95bprobe
========================

.. conda:recipe:: bioconductor-hgu95bprobe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was HG\-U95B\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu95bprobe.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95bprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95bprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95bprobe/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu95bprobe

   |downloads_bioconductor-hgu95bprobe| |docker_bioconductor-hgu95bprobe|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95bprobe

   and update with::

      conda update bioconductor-hgu95bprobe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hgu95bprobe:<tag>

   (see `bioconductor-hgu95bprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95bprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95bprobe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu95bprobe| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95bprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95bprobe
.. _`bioconductor-hgu95bprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95bprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95bprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95bprobe/README.html