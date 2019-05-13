:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayquality'
.. highlight: bash

bioconductor-arrayquality
=========================

.. conda:recipe:: bioconductor-arrayquality
   :replaces_section_title:

   Functions for performing print\-run and array level quality assessment.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/arrayQuality.html
   :license: LGPL
   :recipe: /`bioconductor-arrayquality <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayquality>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayquality/meta.yaml>`_
   :links: biotools: :biotools:`arrayquality`, doi: :doi:`10.1093/bioinformatics/btn647`

   


.. conda:package:: bioconductor-arrayquality

   |downloads_bioconductor-arrayquality| |docker_bioconductor-arrayquality|

   :versions: 1.62.0-0, 1.60.0-0, 1.58.0-0, 1.56.0-0, 1.54.0-0
   
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-marray: >=1.62.0,<1.63.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gridbase: 
   :depends r-hexbin: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrayquality

   and update with::

      conda update bioconductor-arrayquality

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arrayquality:<tag>

   (see `bioconductor-arrayquality/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arrayquality| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayquality.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrayquality
   :alt:   (downloads)
.. |docker_bioconductor-arrayquality| image:: https://quay.io/repository/biocontainers/bioconductor-arrayquality/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayquality
.. _`bioconductor-arrayquality/tags`: https://quay.io/repository/biocontainers/bioconductor-arrayquality?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayquality/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayquality/README.html