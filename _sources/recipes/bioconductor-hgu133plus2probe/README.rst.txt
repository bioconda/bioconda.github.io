:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133plus2probe'
.. highlight: bash

bioconductor-hgu133plus2probe
=============================

.. conda:recipe:: bioconductor-hgu133plus2probe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was HG\-U133\\\_Plus\\\_2\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu133plus2probe.html
   :license: LGPL
   :recipe: /`bioconductor-hgu133plus2probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2probe/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu133plus2probe

   |downloads_bioconductor-hgu133plus2probe| |docker_bioconductor-hgu133plus2probe|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133plus2probe

   and update with::

      conda update bioconductor-hgu133plus2probe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hgu133plus2probe:<tag>

   (see `bioconductor-hgu133plus2probe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133plus2probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133plus2probe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu133plus2probe| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2probe
.. _`bioconductor-hgu133plus2probe/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2probe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133plus2probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133plus2probe/README.html