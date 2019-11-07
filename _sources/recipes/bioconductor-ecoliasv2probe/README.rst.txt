:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecoliasv2probe'
.. highlight: bash

bioconductor-ecoliasv2probe
===========================

.. conda:recipe:: bioconductor-ecoliasv2probe
   :replaces_section_title:

   Probe sequence data for microarrays of type ecoliasv2

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/ecoliasv2probe.html
   :license: LGPL
   :recipe: /`bioconductor-ecoliasv2probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoliasv2probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoliasv2probe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was E\\\_coli\\\_Asv2\\\_probe\\\_tab.


.. conda:package:: bioconductor-ecoliasv2probe

   |downloads_bioconductor-ecoliasv2probe| |docker_bioconductor-ecoliasv2probe|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ecoliasv2probe

   and update with::

      conda update bioconductor-ecoliasv2probe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecoliasv2probe:<tag>

   (see `bioconductor-ecoliasv2probe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecoliasv2probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecoliasv2probe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecoliasv2probe
   :alt:   (downloads)
.. |docker_bioconductor-ecoliasv2probe| image:: https://quay.io/repository/biocontainers/bioconductor-ecoliasv2probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecoliasv2probe
.. _`bioconductor-ecoliasv2probe/tags`: https://quay.io/repository/biocontainers/bioconductor-ecoliasv2probe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecoliasv2probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecoliasv2probe/README.html