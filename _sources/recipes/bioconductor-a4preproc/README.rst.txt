:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-a4preproc'
.. highlight: bash

bioconductor-a4preproc
======================

.. conda:recipe:: bioconductor-a4preproc
   :replaces_section_title:

   Automated Affymetrix Array Analysis Preprocessing Package

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/a4Preproc.html
   :license: GPL-3
   :recipe: /`bioconductor-a4preproc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4preproc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4preproc/meta.yaml>`_
   :links: biotools: :biotools:`a4preproc`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-a4preproc

   |downloads_bioconductor-a4preproc| |docker_bioconductor-a4preproc|

   :versions: 1.30.0-0, 1.28.0-0, 1.26.0-0, 1.24.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-a4preproc

   and update with::

      conda update bioconductor-a4preproc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-a4preproc:<tag>

   (see `bioconductor-a4preproc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-a4preproc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-a4preproc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-a4preproc| image:: https://quay.io/repository/biocontainers/bioconductor-a4preproc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-a4preproc
.. _`bioconductor-a4preproc/tags`: https://quay.io/repository/biocontainers/bioconductor-a4preproc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-a4preproc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-a4preproc/README.html