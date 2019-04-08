:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-codelink'
.. highlight: bash

bioconductor-codelink
=====================

.. conda:recipe:: bioconductor-codelink
   :replaces_section_title:

   This package facilitates reading\, preprocessing and manipulating Codelink microarray data. The raw data must be exported as text file using the Codelink software.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/codelink.html
   :license: GPL-2
   :recipe: /`bioconductor-codelink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codelink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codelink/meta.yaml>`_
   :links: biotools: :biotools:`codelink`

   


.. conda:package:: bioconductor-codelink

   |downloads_bioconductor-codelink| |docker_bioconductor-codelink|

   :versions: 1.50.0-0, 1.48.0-0, 1.46.0-0
   
   :depends bioconductor-annotate: >=1.60.0,<1.61.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-codelink

   and update with::

      conda update bioconductor-codelink

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-codelink:<tag>

   (see `bioconductor-codelink/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-codelink| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-codelink.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-codelink| image:: https://quay.io/repository/biocontainers/bioconductor-codelink/status
   :target: https://quay.io/repository/biocontainers/bioconductor-codelink
.. _`bioconductor-codelink/tags`: https://quay.io/repository/biocontainers/bioconductor-codelink?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-codelink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-codelink/README.html