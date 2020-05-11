:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationfuncs'
.. highlight: bash

bioconductor-annotationfuncs
============================

.. conda:recipe:: bioconductor-annotationfuncs
   :replaces_section_title:

   Annotation translation functions

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/AnnotationFuncs.html
   :license: GPL-2
   :recipe: /`bioconductor-annotationfuncs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationfuncs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationfuncs/meta.yaml>`_
   :links: biotools: :biotools:`annotationfuncs`, doi: :doi:`10.1038/nmeth.3252`

   Functions for handling translating between different identifieres using the Biocore Data Team data\-packages \(e.g. org.Bt.eg.db\).


.. conda:package:: bioconductor-annotationfuncs

   |downloads_bioconductor-annotationfuncs| |docker_bioconductor-annotationfuncs|

   :versions: 1.38.0-0, 1.36.0-0, 1.34.0-1, 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationfuncs

   and update with::

      conda update bioconductor-annotationfuncs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationfuncs:<tag>

   (see `bioconductor-annotationfuncs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationfuncs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationfuncs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationfuncs
   :alt:   (downloads)
.. |docker_bioconductor-annotationfuncs| image:: https://quay.io/repository/biocontainers/bioconductor-annotationfuncs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationfuncs
.. _`bioconductor-annotationfuncs/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationfuncs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationfuncs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationfuncs/README.html