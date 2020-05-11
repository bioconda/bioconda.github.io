:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-barley1probe'
.. highlight: bash

bioconductor-barley1probe
=========================

.. conda:recipe:: bioconductor-barley1probe
   :replaces_section_title:

   Probe sequence data for microarrays of type barley1

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/barley1probe.html
   :license: LGPL
   :recipe: /`bioconductor-barley1probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-barley1probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-barley1probe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Barley1\\\_probe\\\_tab.


.. conda:package:: bioconductor-barley1probe

   |downloads_bioconductor-barley1probe| |docker_bioconductor-barley1probe|

   :versions: 2.18.0-4, 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-barley1probe

   and update with::

      conda update bioconductor-barley1probe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-barley1probe:<tag>

   (see `bioconductor-barley1probe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-barley1probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-barley1probe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-barley1probe
   :alt:   (downloads)
.. |docker_bioconductor-barley1probe| image:: https://quay.io/repository/biocontainers/bioconductor-barley1probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-barley1probe
.. _`bioconductor-barley1probe/tags`: https://quay.io/repository/biocontainers/bioconductor-barley1probe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-barley1probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-barley1probe/README.html