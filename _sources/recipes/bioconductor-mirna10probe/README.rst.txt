:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirna10probe'
.. highlight: bash

bioconductor-mirna10probe
=========================

.. conda:recipe:: bioconductor-mirna10probe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was miRNA\-1\\\_0\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/mirna10probe.html
   :license: LGPL
   :recipe: /`bioconductor-mirna10probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirna10probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirna10probe/meta.yaml>`_

   


.. conda:package:: bioconductor-mirna10probe

   |downloads_bioconductor-mirna10probe| |docker_bioconductor-mirna10probe|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirna10probe

   and update with::

      conda update bioconductor-mirna10probe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirna10probe:<tag>

   (see `bioconductor-mirna10probe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirna10probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirna10probe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirna10probe
   :alt:   (downloads)
.. |docker_bioconductor-mirna10probe| image:: https://quay.io/repository/biocontainers/bioconductor-mirna10probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirna10probe
.. _`bioconductor-mirna10probe/tags`: https://quay.io/repository/biocontainers/bioconductor-mirna10probe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirna10probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirna10probe/README.html