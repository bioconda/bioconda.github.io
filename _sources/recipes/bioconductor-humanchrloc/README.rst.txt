:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humanchrloc'
.. highlight: bash

bioconductor-humanchrloc
========================

.. conda:recipe:: bioconductor-humanchrloc
   :replaces_section_title:

   Annotation data file for humanCHRLOC assembled using data from public data repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/humanCHRLOC.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-humanchrloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanchrloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanchrloc/meta.yaml>`_

   


.. conda:package:: bioconductor-humanchrloc

   |downloads_bioconductor-humanchrloc| |docker_bioconductor-humanchrloc|

   :versions: 2.1.6-3, 2.1.6-2, 2.1.6-1, 2.1.6-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-humanchrloc

   and update with::

      conda update bioconductor-humanchrloc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humanchrloc:<tag>

   (see `bioconductor-humanchrloc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humanchrloc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanchrloc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humanchrloc
   :alt:   (downloads)
.. |docker_bioconductor-humanchrloc| image:: https://quay.io/repository/biocontainers/bioconductor-humanchrloc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanchrloc
.. _`bioconductor-humanchrloc/tags`: https://quay.io/repository/biocontainers/bioconductor-humanchrloc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanchrloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanchrloc/README.html